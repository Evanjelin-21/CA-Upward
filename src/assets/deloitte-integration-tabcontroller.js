/**
 * A simple tab strip control
 *
 * @constructor
 */
function TabbedCntr() {
  /** @type {HTMLDivElement} */
  this.el = document.createElement('div');
  this.el.id = "tabbedSearchPanels";
  this.el.classList.add("tabbed-search-panels");

  this.elTabstrip = document.createElement('div');
  this.elTabstrip.classList.add("tab-strip");
  this.el.appendChild(this.elTabstrip);

  this.elTabstrip.addEventListener("click", function(ev) {
    this.tabs.forEach(function(elTab, tabIdx) {
      if(elTab.contains(ev.target)) {
        // tab clicked
        if(elTab != this.tabs[this.activeTabIndex]) {
          // switch tab
          this.switch(tabIdx);
        }
      }
    }.bind(this));
  }.bind(this));
}
TabbedCntr.prototype.panels = [];
TabbedCntr.prototype.tabs = [];
TabbedCntr.prototype.addTab = function(el, name) {
  this.el.appendChild(el);
  el.classList.add("tab-panel");
  el.classList.add("hidden");
  this.panels.push(el);

  var elTab = document.createElement("div");
  elTab.classList.add("tab");
  elTab.innerText = name;
  this.tabs.push(elTab);

  this.elTabstrip.appendChild(elTab);
};
TabbedCntr.prototype.activeTabIndex = 0;
TabbedCntr.prototype.switch = function(toTabIndex) {
  if(typeof toTabIndex === "undefined") {
    toTabIndex = this.activeTabIndex + 1;
  }
  var currVisiblePnl = this.panels[this.activeTabIndex];
  currVisiblePnl.classList.add("hidden");
  var elCurrTab = this.tabs[this.activeTabIndex];
  elCurrTab.classList.remove("active");
  this.activeTabIndex = toTabIndex % this.panels.length;
  var elmakeVisibleTab = this.tabs[this.activeTabIndex];
  elmakeVisibleTab.classList.add("active");
  var makeVisiblePnl = this.panels[this.activeTabIndex];
  makeVisiblePnl.classList.remove("hidden");
};
