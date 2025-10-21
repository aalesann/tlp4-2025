export const API_BASE = (import.meta.env.VITE_API_BASE ?? "/api").replace(/\/$/, "");

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

function joinUrl(base: string, path: string) {
    if (!path) return base || "/";
    const b = base.replace(/\/$/, "");
    const p = path.replace(/^\//, "");
    return b === "" ? `/${p}` : `${b}/${p}`;
}

async function request<T>(url: string, method: HttpMethod = "GET", body?: unknown): Promise<T> {
    const fullUrl = joinUrl(API_BASE, url);
    // useful for debugging in dev: what exact URL we call
    console.debug("API request ->", method, fullUrl);
    const res = await fetch(fullUrl, {
        method,
        headers: {
            "Content-Type": "application/json",
        },
        body: body ? JSON.stringify(body) : undefined,
    });

    if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(`HTTP ${res.status} - ${text}`);
    }
    return res.json() as Promise<T>;
}

export const api = {
    get: <T>(url: string) => request<T>(url, "GET"),
    post: <T>(url: string, body: unknown) => request<T>(url, "POST", body),
};
