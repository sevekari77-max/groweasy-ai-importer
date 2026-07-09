import express from "express";
import cors from "cors";

import healthRoutes from "./routes/health.routes.js";
import importRoutes from "./routes/import.routes.js";
import { errorHandler } from "./middleware/error.middleware.js";
import { logger } from "./middleware/logger.middleware.js";

const app = express();

app.use(logger);
app.use(cors());
app.use(express.json());

app.use("/api/health", healthRoutes);
app.use("/api/import", importRoutes);

app.use(errorHandler);

export default app;