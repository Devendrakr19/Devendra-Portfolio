import React from "react";

const Homepage = () => {
  return (
    <>
      <div className="grid grid-cols-2 mt-[90px] p-[10px]">
        <div className="col-span-1">
          <div className="flex justify-center items-center relative">
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              className="bg_img w-[65%] bg-[#2e6259] z-10 overflow-hidden rounded inset_shadow"
            >
              <div className="bg-[#0000007e]">
              <img src="/dev_b.png" alt="" className="object-cover" />
              </div>
            </div>
            <div
              data-aos="fade-down-left"
              data-aos-duration="1000"
              className="inset_shadow absolute top-[-70px] right-[50px] bg-[#abc4c0] w-[400px] h-[300px]"
            ></div>
            <div
              data-aos="fade-up-right"
              data-aos-duration="1000"
              className="inset_shadow absolute top-[180px] left-[50px] inline-block bg-[#abc4c0] w-[400px] h-[300px]"
            ></div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="pr-[10px]">
            {/* <h1 className="text-[90px] font-bold text-[#e7e72d] text-center">𝕯𝖊𝖛𝖊𝖓𝖉𝖗𝖆 𝕶𝖚𝖒𝖆𝖗 𝕻𝖆𝖓𝖉𝖎𝖙</h1> */}

            <h1 className="name text-[60px] font-bold text-[#e7e72d] text-center mt-[60px]">
              D̷̢̨̛̩͈̼͎̠͙̥̈e̶̻̹͔̝̥̐̿̃̾̐͆͊́v̸̪̥̬̪̈̎̈́̔͜͜e̴̡̾n̶̛̮̖̖̺̙͓̋̀̇̂̃́͌́͘͜d̵̞͖̤͔̄̋̅̓̓̀̒̆̀͛r̵̫̮͙̩͍̾̈̋̕̕̚ả̷̪̲͖̟͇̥͍̘̒̐̽ ̷͎͙̦̿̒̍̚͠Ķ̶̡͈͇͔͉̱̹̽̄͊̀͗͘̚u̷͇̪̩̘̮͛̆̉́͂͐̇͂̎͘m̶̧̒ạ̷̧̟̗̩̳̠̩͉͠ͅr̶̭̩̺̺̃͆̅ ̴̧̜͋̎̎̋͗͗̓̓͗͘Ṕ̸̠̂̐͒̈̒̕ͅá̶̻̈́̀ñ̸̛̥̝̩̭̇́̄̑͊͘̚͝d̴̢̤̣̙̯͊́͂̏̀̓͒͋̈͂ͅi̷̡̩̲͊̐̃̆͌́t̶̞̿͊͒͜
            </h1>
            <p className="name text-[70px] text-[white] text-center mt-[100px]">
            ₛₒ<span className="text-[yellow]">f</span>ₜ<span className="text-[#00f7ff]">w</span>ₐᵣₑ <span className="text-[#00ffaa]">D</span>ₑᵥₑₗₒₚₑᵣ  
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
