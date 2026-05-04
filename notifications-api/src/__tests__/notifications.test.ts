import request from "supertest";
import app from "../app";
import { clearNotifications } from "../store";

describe("POST /notifications", () => {
  beforeEach(() => {
    clearNotifications();
  });

  it("should create a new notification", async () => {
    const response = await request(app).post("/notifications").send({
      userId: "user123",
      message: "This is a test notification",
      channel: "email",
    });

    expect(response.status).toBe(201);
    expect(response.body.userId).toBe("user123");
    expect(response.body.message).toBe("This is a test notification");
    expect(response.body.channel).toBe("email");
  });

  it("should return 400 if field message is missing", async () => {
    const response = await request(app).post("/notifications").send({
      userId: "user123",
      channel: "email",
    });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Faltan campos requeridos");
  });

  it("should return 400 if channel is invalid", async () => {
    const response = await request(app).post("/notifications").send({
      userId: "user123",
      message: "This is a test notification",
      channel: "invalid_channel",
    });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Canal no válido");
  });
});

describe("GET /notifications", () => {
  it("should return all notifications", async () => {
    const response = await request(app).get("/notifications");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body.data)).toBe(true);
  });
});
