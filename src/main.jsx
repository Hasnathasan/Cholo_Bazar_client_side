import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routers/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./Providers/AuthProvider";
const queryClient = new QueryClient();
import { NextUIProvider } from "@nextui-org/react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <NextUIProvider>
    <AuthProvider>
      <React.StrictMode>
        <div className="bg-[#f2f3f7]">
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </div>
      </React.StrictMode>
    </AuthProvider>
  </NextUIProvider>
);
