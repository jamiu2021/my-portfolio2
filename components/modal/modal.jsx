import { motion } from "framer-motion";
const DialogModal = ({ title, children, onClose }) => {
  return (
    <div
      className="fixed w-full  h-screen backdrop-blur-xs z-9 top-0 left-0 flex flex-col items-center justify-center "
      onClick={onClose}
    >
      <motion.dialog
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="p-6  rounded-lg shadow-md z-10 top-[20%] left-[28%] md:w-2/5 bg-[#0c1021]  shadow-indigo-200/50"
        open
      >
        <h1>{title}</h1>
        {children}
      </motion.dialog>
    </div>
  );
};

export default DialogModal;
