"use client";

import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import React, {
  useState,
  useEffect,
  useRef,
  useActionState,
  memo,
} from "react";

import { createInquiry, type InquiryState } from "@/app/actions/inquiry";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Phone number formatting helper
const formatPhoneNumber = (value: string) => {
  const numbers = value.replace(/\D/g, "");
  if (numbers.length <= 3) return numbers;
  if (numbers.length <= 7) return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
  return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(
    7,
    11
  )}`;
};

// Form component - memoized to prevent re-renders
const ContactForm = memo(
  ({
    formData,
    setFormData,
    formAction,
    isPending,
    state,
    onAlertOpen,
  }: {
    formData: {
      name: string;
      phone: string;
      message: string;
      isAgreed: boolean;
    };
    setFormData: React.Dispatch<
      React.SetStateAction<{
        name: string;
        phone: string;
        message: string;
        isAgreed: boolean;
      }>
    >;
    formAction: (payload: FormData) => void;
    isPending: boolean;
    state: InquiryState;
    onAlertOpen: () => void;
  }) => {
    const handleSubmit = (e: React.FormEvent) => {
      if (!formData.isAgreed) {
        e.preventDefault();
        onAlertOpen();
        return;
      }
    };

    return (
      <form
        action={formAction}
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        {/* Name Input */}
        <div>
          <label
            htmlFor="name-input"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            성함
          </label>
          <input
            id="name-input"
            name="name"
            type="text"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 outline-none transition-all duration-200 focus:border-teal-secondary focus:ring-2 focus:ring-teal-secondary/20 focus:scale-102"
            placeholder="이름을 입력하세요"
            required
          />
          {state.fieldErrors?.name && (
            <p className="text-sm text-red-500 mt-1">
              {state.fieldErrors.name[0]}
            </p>
          )}
        </div>

        {/* Contact Input */}
        <div>
          <label
            htmlFor="contact-input"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            연락처
          </label>
          <input
            id="contact-input"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                phone: formatPhoneNumber(e.target.value),
              }))
            }
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 outline-none transition-all duration-200 focus:border-teal-secondary focus:ring-2 focus:ring-teal-secondary/20 focus:scale-102"
            placeholder="010-0000-0000"
            required
            maxLength={13}
          />
          {state.fieldErrors?.phone && (
            <p className="text-sm text-red-500 mt-1">
              {state.fieldErrors.phone[0]}
            </p>
          )}
        </div>

        {/* Inquiry Input */}
        <div>
          <label
            htmlFor="inquiry-input"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            문의내용
          </label>
          <textarea
            id="inquiry-input"
            name="message"
            value={formData.message}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, message: e.target.value }))
            }
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 outline-none transition-all duration-200 focus:border-teal-secondary focus:ring-2 focus:ring-teal-secondary/20 min-h-[6rem] focus:scale-102"
            placeholder="문의사항을 입력하세요"
            required
          />
          {state.fieldErrors?.message && (
            <p className="text-sm text-red-500 mt-1">
              {state.fieldErrors.message[0]}
            </p>
          )}
        </div>

        {/* Privacy Agreement Checkbox */}
        <div className="flex items-center gap-2.5">
          <div className="hover:scale-110 active:scale-95 transition-transform duration-200">
            <Checkbox
              id="privacy-agreement"
              name="isAgreed"
              checked={formData.isAgreed}
              onCheckedChange={(checked) =>
                setFormData((prev) => ({
                  ...prev,
                  isAgreed: checked as boolean,
                }))
              }
              className="h-5 w-5 border-gray-300 data-[state=checked]:bg-teal-secondary data-[state=checked]:border-teal-secondary"
            />
          </div>
          <label
            htmlFor="privacy-agreement"
            className="cursor-pointer text-sm text-gray-700"
          >
            개인정보 수집 및 이용 동의
          </label>
        </div>
        {state.fieldErrors?.isAgreed && (
          <p className="text-sm text-red-500 -mt-2">
            {state.fieldErrors.isAgreed[0]}
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isPending}
          className="flex items-center justify-center gap-2 rounded-full bg-teal-secondary px-6 py-3 text-white shadow-lg hover:scale-105 hover:shadow-2xl active:scale-95 transition-all duration-300 font-bold w-full disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isPending ? (
            <>
              처리중...
              <Loader2 className="w-4 h-4 animate-spin" />
            </>
          ) : (
            <>
              신청하기
              <ArrowRight strokeWidth={3} className="w-4 h-4" />
            </>
          )}
        </button>

        {/* Error message */}
        {state.error && (
          <p className="text-sm text-red-500 text-center">{state.error}</p>
        )}
      </form>
    );
  }
);

ContactForm.displayName = "ContactForm";

const FixedContactBanner = () => {
  const [open, setOpen] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Form states for both forms
  const [mobileFormData, setMobileFormData] = useState({
    name: "",
    phone: "",
    message: "",
    isAgreed: false,
  });

  const [desktopFormData, setDesktopFormData] = useState({
    name: "",
    phone: "",
    message: "",
    isAgreed: false,
  });

  // Action states
  const initialState: InquiryState = {};
  const [mobileState, mobileFormAction, mobileIsPending] = useActionState(
    createInquiry,
    initialState
  );
  const [desktopState, desktopFormAction, desktopIsPending] = useActionState(
    createInquiry,
    initialState
  );

  // Reset form data
  const resetMobileForm = () => {
    setMobileFormData({ name: "", phone: "", message: "", isAgreed: false });
  };

  const resetDesktopForm = () => {
    setDesktopFormData({ name: "", phone: "", message: "", isAgreed: false });
  };

  // Handle success
  useEffect(() => {
    if (mobileState.success) {
      setShowSuccess(true);
      resetMobileForm();
      setTimeout(() => {
        setOpen(false);
        setShowSuccess(false);
      }, 2000);
    }
  }, [mobileState.success]);

  useEffect(() => {
    if (desktopState.success) {
      setShowSuccess(true);
      resetDesktopForm();
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }
  }, [desktopState.success]);

  useEffect(() => {
    const handleScroll = () => {
      const footerGap = document.getElementById("footer-gap");
      if (!footerGap || !bannerRef.current) return;

      const gapRect = footerGap.getBoundingClientRect();
      const bannerHeight = bannerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      // Check if the gap is visible and if we should dock the banner
      if (gapRect.top <= windowHeight - bannerHeight) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (pathname.includes("/admin") || pathname.includes("/login")) return null;

  return (
    <>
      {/* Mobile Vertical Button */}
      <div className="fixed left-0 top-3/4 -translate-y-1/2 z-50 max:hidden">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <motion.button
              className="bg-teal-secondary text-white p-3 rounded-r-lg shadow-lg font-bold text-base writing-mode-vertical-rl"
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
              }}
            >
              상담 신청하기
            </motion.button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            {showSuccess ? (
              <motion.div
                className="flex flex-col items-center justify-center py-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <CheckCircle2 className="w-16 h-16 text-teal-secondary mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  상담 신청 완료!
                </h3>
                <p className="text-gray-600 text-center">
                  곧 연락드리겠습니다.
                </p>
              </motion.div>
            ) : (
              <>
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold">
                    상담 신청
                  </DialogTitle>
                </DialogHeader>
                <ContactForm
                  formData={mobileFormData}
                  setFormData={setMobileFormData}
                  formAction={mobileFormAction}
                  isPending={mobileIsPending}
                  state={mobileState}
                  onAlertOpen={() => setShowAlert(true)}
                />
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>

      {/* Desktop Fixed Banner */}
      <motion.div
        ref={bannerRef}
        className="fixed bottom-0 left-0 right-0 z-50 bg-teal-secondary hidden max:block"
        initial={{ y: 100 }}
        animate={{
          y: 0,
          opacity: isAtBottom ? 0 : 1,
          pointerEvents: isAtBottom ? "none" : "auto",
        }}
        transition={{
          y: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
      >
        <div className="mx-auto max-w-screen-max p-2.5">
          <div className="flex items-center justify-center gap-[1.3125rem] bg-teal-secondary px-10 py-2">
            {/* Desktop Form */}
            <motion.form
              action={desktopFormAction}
              onSubmit={(e) => {
                if (!desktopFormData.isAgreed) {
                  e.preventDefault();
                  setShowAlert(true);
                }
              }}
              className="flex items-center gap-[1.3125rem]"
            >
              {/* Name Input */}
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label
                  htmlFor="desktop-name-input"
                  className="flex items-center justify-center gap-2.5 px-4 py-2 text-lg leading-[1.6] text-white font-bold"
                >
                  성함
                </label>
                <motion.input
                  id="desktop-name-input"
                  name="name"
                  type="text"
                  value={desktopFormData.name}
                  onChange={(e) =>
                    setDesktopFormData({
                      ...desktopFormData,
                      name: e.target.value,
                    })
                  }
                  className="h-8 w-40 rounded bg-white/25 px-3 text-white placeholder-white/60 outline-none transition-all duration-200"
                  placeholder="이름을 입력하세요"
                  whileFocus={{ scale: 1.02 }}
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.25)" }}
                  onFocus={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "rgba(255, 255, 255, 0.35)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "rgba(255, 255, 255, 0.25)")
                  }
                  required
                />
              </motion.div>

              {/* Contact Input */}
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label
                  htmlFor="desktop-contact-input"
                  className="flex items-center justify-center gap-2.5 px-4 py-2 text-lg leading-[1.6] text-white font-bold"
                >
                  연락처
                </label>
                <motion.input
                  id="desktop-contact-input"
                  name="phone"
                  type="tel"
                  value={desktopFormData.phone}
                  onChange={(e) =>
                    setDesktopFormData({
                      ...desktopFormData,
                      phone: formatPhoneNumber(e.target.value),
                    })
                  }
                  className="h-8 w-40 rounded bg-white/25 px-3 text-white placeholder-white/60 outline-none transition-all duration-200"
                  placeholder="010-0000-0000"
                  whileFocus={{ scale: 1.02 }}
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.25)" }}
                  onFocus={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "rgba(255, 255, 255, 0.35)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "rgba(255, 255, 255, 0.25)")
                  }
                  required
                  maxLength={13}
                />
              </motion.div>

              {/* Inquiry Input */}
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label
                  htmlFor="desktop-inquiry-input"
                  className="flex items-center justify-center gap-2.5 px-4 py-2 text-lg leading-[1.6] text-white font-bold"
                >
                  문의내용
                </label>
                <motion.input
                  id="desktop-inquiry-input"
                  name="message"
                  type="text"
                  value={desktopFormData.message}
                  onChange={(e) =>
                    setDesktopFormData({
                      ...desktopFormData,
                      message: e.target.value,
                    })
                  }
                  className="h-8 w-[13.75rem] rounded bg-white/25 px-3 text-white placeholder-white/60 outline-none transition-all duration-200"
                  placeholder="문의사항을 입력하세요"
                  whileFocus={{ scale: 1.02 }}
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.25)" }}
                  onFocus={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "rgba(255, 255, 255, 0.35)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "rgba(255, 255, 255, 0.25)")
                  }
                  required
                />
              </motion.div>

              {/* Privacy Agreement Checkbox */}
              <motion.div
                className="flex items-center gap-2.5 px-4 py-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2.5"
                >
                  <Checkbox
                    id="desktop-privacy-agreement"
                    name="isAgreed"
                    checked={desktopFormData.isAgreed}
                    onCheckedChange={(checked) =>
                      setDesktopFormData({
                        ...desktopFormData,
                        isAgreed: checked as boolean,
                      })
                    }
                    className="h-5 w-5 border-white/50 bg-white/25 data-[state=checked]:bg-white data-[state=checked]:border-white data-[state=checked]:text-teal-secondary"
                  />
                </motion.div>
                <label
                  htmlFor="desktop-privacy-agreement"
                  className="cursor-pointer text-lg leading-[1.6] text-white font-bold"
                >
                  개인정보 수집 및 이용 동의
                </label>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={desktopIsPending}
                className="flex items-center gap-2 rounded-full bg-white px-6 py-1 text-lg leading-[1.6] text-teal-secondary shadow-lg hover:scale-105 duration-300 font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.7,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                whileHover={
                  desktopIsPending
                    ? {}
                    : {
                        scale: 1.05,
                        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                      }
                }
                whileTap={desktopIsPending ? {} : { scale: 0.95 }}
              >
                {desktopIsPending ? (
                  <>
                    처리중...
                    <Loader2 className="w-4 h-4 animate-spin" />
                  </>
                ) : (
                  <>
                    신청하기
                    <ArrowRight strokeWidth={3} className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </motion.div>

      {/* Desktop Success Message */}
      {showSuccess && desktopState.success && (
        <motion.div
          className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-white rounded-lg shadow-xl p-6 flex items-center gap-3"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <CheckCircle2 className="w-6 h-6 text-teal-secondary" />
          <div>
            <p className="font-bold text-gray-800">
              상담 신청이 완료되었습니다!
            </p>
            <p className="text-sm text-gray-600">곧 연락드리겠습니다.</p>
          </div>
        </motion.div>
      )}

      {/* Alert Dialog for Terms Agreement */}
      <AlertDialog open={showAlert} onOpenChange={setShowAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>개인정보 수집 동의 필요</AlertDialogTitle>
            <AlertDialogDescription>
              상담 신청을 위해서는 개인정보 수집 및 이용에 동의하셔야 합니다.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setShowAlert(false)}>
              확인
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default FixedContactBanner;
