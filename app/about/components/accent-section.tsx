import * as motion from "motion/react-client";

const AccentSection = () => {
  return (
    <section className="w-full py-16 md:py-12 lg:py-16 -mt-3 lg:mt-0">
      <div className="max-w-[--breakpoint-max] mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-[69.375rem] mx-auto flex flex-col items-center gap-2"
        >
          <p className="text-14 md:text-base lg:text-lg text-dark-primary text-center opacity-50 font-bold">
            CHOONEEPLANT DENTAL CLINIC
          </p>
          <h2 className="text-xl md:text-3xl lg:text-4xl text-dark-primary text-center font-bold">
            좋은 이 + 좋은 임플란트
          </h2>
          <p className="text-base md:text-xl lg:text-2xl text-dark-primary text-center sm:font-bold mt-2">
            {`조은이플란트치과는 "`}
            <span className="text-teal-secondary font-bold">좋은 치아</span>
            {`"와 `}
            <br className="md:hidden" />
            &quot;
            <span className="text-teal-secondary font-bold">좋은 임플란트</span>
            {`" 를`}
            생각합니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AccentSection;
