import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export function createToken(userId) {
  if (!JWT_SECRET) throw new Error("JWT_SECRET is not configured");
  return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: "30d" });
}

export function getUserIdFromRequest(request) {
  if (!JWT_SECRET) throw new Error("JWT_SECRET is not configured");

  const header = request.headers.get("authorization") || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;

  if (!token) return null;

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded.id;
  } catch {
    return null;
  }
}
