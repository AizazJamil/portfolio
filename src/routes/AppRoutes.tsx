import NotFound from "@/components/NotFound/NotFound";
import MainLayout from "@/layout/MainLayout";
import Home from "@/pages/Home/Home";
import { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route path="/home" element={<Navigate to="/" replace />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
