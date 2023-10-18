import React from "react";

function Dashboard() {
  return (
    <div id="__mainSection">
      <div id="_leftPart">
        <div id="top">
          <div className="logo">
            <i className="fa-solid fa-gear"></i>
          </div>
          <div className="">DashBoard</div>
        </div>
        <div id="middle">
          <div class="items item1">
            <div>
              <i class="fa-solid fa-key"></i>
            </div>
            <div class="content">DashBoard</div>
            <div>
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
          <div class="items item2">
            <div>
              <i class="fa-solid fa-cube"></i>
            </div>
            <div class="content">Product</div>
            <div>
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
          <div class="items item3">
            <div>
              <i class="fa-regular fa-circle-user"></i>
            </div>
            <div class="content">Customers</div>
            <div>
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
          <div class="items item4">
            <div>
              <i class="fa-brands fa-nfc-symbol"></i>
            </div>
            <div class="content">Income</div>
            <div>
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
          <div class="items item5">
            <div>
              <i class="fa-solid fa-gear"></i>
            </div>
            <div class="content">Promote</div>
            <div>
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
          <div class="items item6">
            <div>
              <i class="fa-brands fa-hire-a-helper"></i>
            </div>
            <div class="content">Help</div>
            <div>
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
        </div>
        <div id="bottom">
          {" "}
          <div>img</div>
          <div class="content">
            <div>Evano</div>
            <div>Project Manager</div>
          </div>
          <div>
            <i class="fa-solid fa-angle-down"></i>
          </div>
        </div>
      </div>
      <div id="_rightPart">
        <div id="top">
          <div>Hello Shahrukh 👋</div>
          <div className="inputTag">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input placeholder="Search" />
          </div>
        </div>
        <div id="bottom">
          <div class="firstLine first"></div>
          <div class="firstLine second"></div>
          <div class="firstLine third"></div>
          <div class="firstLine fourth"></div>
          <div class="fifth"></div>
          <div class="sixth"></div>
          <div class="seventh"></div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
