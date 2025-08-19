import React from "react";

const DAASTypes = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 md:px-12 py-10">
      <span className="shadow-md rounded-full px-4 py-2 font-bold">
        Did You Know?
      </span>
      <h1 className="font-black text-[#023576] text-3xl text-center">
        Types of Desktop as a Service (DaaS)
      </h1>

      <span className="text-[#023576] py-10 text-center">
        DaaS infrastructure mainly has two types, depending on the business
        requirements.
      </span>

      <div className="max-w-[1200px] flex max-md:flex-col items-center justify-center gap-10">
        {/* card1 */}
        <div className="lg:w-1/2 rounded-xl shadow-xl space-y-5 pb-8">
          <div className="flex items-center gap-5 px-8">
            <span className="p-3 border border-black rounded-full">icon</span>
            <span className="font-bold text-2xl">Persistent Daas</span>
          </div>

          {/* desc */}
          <p className="px-8 text-sm">
            In persistent type desktop as a service, you get the maximum
            flexibility and compatibility. The virtualized desktop will remain
            the same whenever you log in. It is easier for DaaS providers like
            Sagenext to deploy the software service, but it is expensive and
            requires higher storage facilities.
          </p>

          <div className="px-8 bg-[#f4faff]">
            <strong>Best Suited For:</strong>
            <div className="grid grid-cols-2 space-y-5 pt-2">
              <span>icon 1</span>
              <span>icon 2</span>
              <span>icon 3</span>
              <span>icon 4</span>
            </div>
          </div>

          <div className="px-8 flex gap-5">
            {/* adv */}
            <div className="w-1/2 bg-[#e8ffe6] p-4 rounded-xl">
              <strong className="text-[#5dd05d]">Advantages</strong>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </div>

            {/* chal */}
            <div className="w-1/2 bg-[#ffebeb] p-4 rounded-xl">
              <strong className="text-red-400">Challenges</strong>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </div>
          </div>
        </div>

        {/* card2 */}
        <div className="lg:w-1/2 rounded-xl shadow-xl space-y-5 pb-8">
          <div className="flex items-center gap-5 px-8">
            <span className="p-3 border border-black rounded-full">icon</span>
            <span className="font-bold text-2xl">Persistent Daas</span>
          </div>

          {/* desc */}
          <p className="px-8 text-sm">
            In persistent type desktop as a service, you get the maximum
            flexibility and compatibility. The virtualized desktop will remain
            the same whenever you log in. It is easier for DaaS providers like
            Sagenext to deploy the software service, but it is expensive and
            requires higher storage facilities.
          </p>

          <div className="px-8 bg-[#f4faff]">
            <strong>Best Suited For:</strong>
            <div className="grid grid-cols-2 space-y-5 pt-2">
              <span>icon 1</span>
              <span>icon 2</span>
              <span>icon 3</span>
              <span>icon 4</span>
            </div>
          </div>

          <div className="px-8 flex gap-5">
            {/* adv */}
            <div className="w-1/2 bg-[#e8ffe6] p-4 rounded-xl">
              <strong className="text-[#5dd05d]">Advantages</strong>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </div>

            {/* chal */}
            <div className="w-1/2 bg-[#ffebeb] p-4 rounded-xl">
              <strong className="text-red-400">Challenges</strong>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DAASTypes;
