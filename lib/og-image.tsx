import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const ogImageSize = {
  width: 1200,
  height: 630,
};

const logo = readFile(join(process.cwd(), "public/logo.png"));

export async function createOgImage() {
  const logoData = await logo;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#020617",
          color: "#f8fafc",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 620,
            height: 620,
            right: -130,
            top: -210,
            borderRadius: 999,
            background: "rgba(16, 185, 129, 0.14)",
            filter: "blur(50px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.13,
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.2) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "53%",
            padding: "64px 0 58px 72px",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`data:image/png;base64,${logoData.toString("base64")}`}
            alt="ArchSaaS"
            style={{ width: 260, height: 80, objectFit: "contain", objectPosition: "left center" }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                color: "#6ee7b7",
                fontSize: 18,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                marginBottom: 22,
              }}
            >
              Technical architecture review
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 48,
                lineHeight: 1.08,
                fontWeight: 700,
                letterSpacing: "-0.04em",
                maxWidth: 510,
              }}
            >
              Clareza para construir e escalar seu SaaS.
            </div>
            <div
              style={{
                display: "flex",
                color: "#94a3b8",
                fontSize: 22,
                marginTop: 24,
              }}
            >
              Arquitetura validada. Custos claros. Roadmap de 90 dias.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              color: "#64748b",
              fontSize: 16,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            arch-saas-one.vercel.app
          </div>
        </div>
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            width: "47%",
            padding: "46px 58px 46px 24px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: 430,
              padding: 24,
              border: "1px solid rgba(255,255,255,0.16)",
              borderRadius: 28,
              background: "rgba(15, 23, 42, 0.82)",
              boxShadow: "0 25px 80px rgba(0,0,0,0.45)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "#64748b",
                fontSize: 14,
                letterSpacing: "0.13em",
                textTransform: "uppercase",
                paddingBottom: 18,
                borderBottom: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <span style={{ display: "flex", color: "#6ee7b7" }}>
                ● architecture map
              </span>
              <span>v1.0 / review</span>
            </div>
            <div
              style={{
                display: "flex",
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: 48,
                  right: 48,
                  height: 2,
                  background: "linear-gradient(90deg, #34d399, #38bdf8)",
                  opacity: 0.65,
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 150,
                  height: 108,
                  border: "2px solid #34d399",
                  borderRadius: 18,
                  background: "#081b20",
                  boxShadow: "0 0 28px rgba(52,211,153,0.2)",
                }}
              >
                <span style={{ display: "flex", color: "#ecfdf5", fontSize: 18 }}>
                  core system
                </span>
                <span style={{ display: "flex", color: "#6ee7b7", fontSize: 13, marginTop: 9 }}>
                  decision node
                </span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                padding: "18px 18px 16px",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 16,
                background: "rgba(2,6,23,0.78)",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ display: "flex", color: "#6ee7b7", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  Architecture health
                </span>
                <span style={{ display: "flex", color: "#fff", fontSize: 18, marginTop: 8 }}>
                  ● Ready to build
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                <span style={{ display: "flex", color: "#6ee7b7", fontSize: 30 }}>90d</span>
                <span style={{ display: "flex", color: "#64748b", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  roadmap
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    ogImageSize,
  );
}