const RefundPage = () => {
  return (
    <section className='max-w-3xl mx-auto pt-12 px-4'>
      <div className='h-36 flex items-center justify-center'>
        <p className='text-[#4fafaf] text-2xl font-medium'>Refund Policy</p>
      </div>

      <div className='bg-slate-100 p-4 mb-10'>
        <ul className='space-y-2 list-disc list-inside'>
          <li>
            Tour packages with airline tickets are non-refundable,
            non-rebookable and non-reroutable.
          </li>
          <li>
            Tour packages with hotel reservation are refundable if canceled 60
            days in advance.
          </li>
          <li>
            Stand-alone tours are refundable up to 7 days before the scheduled
            date.
          </li>
          <li>
            If tours are canceled due to poor weather, you will be refunded 50%
            of amount you paid for that specific activity only.
          </li>
          <li>
            No-show shall be treated as a cancelation and is subject to full
            cancelation fees
          </li>
        </ul>
      </div>
    </section>
  );
};

export default RefundPage;
