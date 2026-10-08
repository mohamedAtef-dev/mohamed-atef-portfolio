import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}


//                                                        خريطة سير البيانات والهيكلية

    //                ┌────────────────────────────────────────────────────────┐
    //                │                     1. ThemeContext.tsx                │
    //                │  - يُنشئ السياق: ThemeContext                          │
    //                │  - يُدير الحالة: theme (light | dark)                  │
    //                │  - يحفظ ويربط مع: localStorage & document.body        │
    //                │  - يُصَدر المكون: <ThemeProvider>                       │
    //                └───────────────────────────┬────────────────────────────┘
    //                                            │ (غلاف البيانات)
    //                                            ▼
    //                ┌────────────────────────────────────────────────────────┐
    //                │                        2. App.tsx                      │
    //                │  - يغلف التطبيق بـ: <ThemeProvider>                   │
    //                │  - يمرر المكونات الأبناء (children) مثل <Header />    │
    //                └───────────────────────────┬────────────────────────────┘
    //                                            │ (إتاحة الوصول)
    //                                            ▼
    // ┌────────────────────────────────────────┐     ┌────────────────────────────────────────┐
    // │             3. useTheme.ts             │     │              4. Header.tsx             │
    // │  - يستورد: ThemeContext                │ ──► │  - يستدعي: useTheme()                 │
    // │  - يقرأ البيانات عبر: useContext       │     │  - يقرأ: theme                         │
    // │  - يحتوي على صمام أمان (Error Check)   │     │  - يُنفذ: toggleTheme() عند الضغط      │
    // └────────────────────────────────────────┘     └────────────────────────────────────────┘