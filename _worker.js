export default {
    async fetch(req, env) {
        const url = new URL(req.url)

        if (url.pathname === "/boobs") {
            return new Response.json([8, 0, 0, 8, 5])
        }

        return env.ASSETS.fetch(req)
    }
}
