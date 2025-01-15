import jwt from "jsonwebtoken";

export const isAuthenticated = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res
      .status(401)
      .json({ message: "No token provided, please log in." });
  }

  try {
    const decoded = jwt.verify(token, "secret_key");

    req.user = { id: decoded.id, email: decoded.email, role: decoded.role };

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token." });
  }
};
