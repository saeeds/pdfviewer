import { useEffect, useState } from "react";
import { Viewer, Worker, TextDirection } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import ar_AE from "@react-pdf-viewer/locales/lib/ar_AE.json";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/toolbar/lib/styles/index.css";

function App() {
  const [url, setUrl] = useState("");
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    if (queryParams.get("source")) setUrl(queryParams.get("source"));
  }, []);

  return (
    <div
      style={{
        border: "1px solid rgba(0, 0, 0, 0.3)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
        <div>
          <div
            style={{
              flex: 1,
              overflow: "hidden",
            }}
          >
            <Viewer
              localization={ar_AE}
              fileUrl={url}
              plugins={[defaultLayoutPluginInstance]}
              theme={{
                direction: TextDirection.RightToLeft,
              }}
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </div>
      </Worker>
    </div>
  );
}

export default App;
