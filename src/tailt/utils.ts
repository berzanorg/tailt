// clsify() function is to convert Template String Arrays into string.
// Beautifying strings might be added in the future.
export function clsify(t: TemplateStringsArray): string {
    return t.toString().replace(/\n/g, " ")
}