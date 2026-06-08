const themeData = [
  { name: "Blue", value: "#38bdf8", value2: "#8b5cf6", preview: "linear-gradient(135deg, #38bdf8, #8b5cf6)" },
  { name: "Sunset", value: "#fb7185", value2: "#f59e0b", preview: "linear-gradient(135deg, #fb7185, #f59e0b)" },
  { name: "Mint", value: "#34d399", value2: "#06b6d4", preview: "linear-gradient(135deg, #34d399, #06b6d4)" },
  { name: "Slate", value: "#94a3b8", value2: "#64748b", preview: "linear-gradient(135deg, #94a3b8, #64748b)" },
];

const quickItems = [
  ["S", "Short text", "Trả lời ngắn"],
  ["P", "Paragraph", "Đoạn mô tả"],
  ["M", "Multiple", "Chọn một đáp án"],
  ["C", "Checkbox", "Chọn nhiều"],
  ["D", "Dropdown", "Danh sách thả xuống"],
  ["R", "Scale", "Thang điểm"],
  ["A", "Date", "Ngày"],
  ["T", "Time", "Giờ"],
];

const cards = [
  {
    type: "Short answer",
    title: "What was the strongest part of the demo?",
    body: [{ kind: "field", text: "Type your response..." }],
  },
  {
    type: "Multiple choice",
    title: "Which area needs the most polish?",
    body: [
      { kind: "choice", text: "Top bar and layout", active: true },
      { kind: "choice", text: "Share modal and preview" },
      { kind: "choice", text: "AI chatbox and responsive" },
    ],
  },
  {
    type: "Linear scale",
    title: "How cohesive does the merged UI feel?",
    body: [{ kind: "scale", text: "1  2  3  4  5" }],
  },
];

const quickList = document.querySelector("#quickList");
const themeGrid = document.querySelector("#themeGrid");
const cardList = document.querySelector("#cardList");
const chatbox = document.querySelector("[data-chatbox]");
const chatHistory = document.querySelector("#chatHistory");
const chatForm = document.querySelector("#chatForm");
const chatMessage = document.querySelector("#chatMessage");
const shareModal = document.querySelector("[data-share-modal]");
const year = document.querySelector(".year");

function renderQuickList() {
  quickList.innerHTML = quickItems
    .map(
      ([icon, title, description], index) => `
        <button class="quick-item ${index === 0 ? "active" : ""}" type="button">
          <span class="quick-icon">${icon}</span>
          <span>
            <strong>${title}</strong>
            <small>${description}</small>
          </span>
        </button>
      `,
    )
    .join("");
}

function renderThemes() {
  themeGrid.innerHTML = themeData
    .map(
      (theme, index) => `
        <button class="theme-item ${index === 0 ? "active" : ""}" type="button" data-theme-index="${index}">
          <span class="theme-swatch" style="background:${theme.preview}"></span>
          <span>
            <strong>${theme.name}</strong>
            <small>${theme.value} / ${theme.value2}</small>
          </span>
        </button>
      `,
    )
    .join("");
}

function renderCards() {
  cardList.innerHTML = cards
    .map(
      (card, index) => `
        <article class="card ${index === 0 ? "selected" : ""}">
          <div class="card-top">
            <span class="card-badge">${card.type}</span>
            <span class="card-badge">Card ${index + 1}</span>
          </div>
          <h3>${card.title}</h3>
          <p>This card represents the merged question editor from Person 2 inside the combined demo frame.</p>
          <div class="card-body">
            ${card.body
              .map((item) => {
                if (item.kind === "field") {
                  return `<div class="field-box">${item.text}</div>`;
                }

                if (item.kind === "choice") {
                  return `<div class="choice-box ${item.active ? "active" : ""}"><span class="choice-dot"></span><span>${item.text}</span></div>`;
                }

                return `<div class="scale-box">${item.text}</div>`;
              })
              .join("")}
          </div>
        </article>
      `,
    )
    .join("");
}

function openModal() {
  shareModal.classList.add("open");
  shareModal.hidden = false;
}

function closeModal() {
  shareModal.classList.remove("open");
  window.setTimeout(() => {
    if (!shareModal.classList.contains("open")) {
      shareModal.hidden = true;
    }
  }, 180);
}

function openChat() {
  chatbox.hidden = false;
  window.requestAnimationFrame(() => chatbox.classList.add("open"));
}

function closeChat() {
  chatbox.classList.remove("open");
  window.setTimeout(() => {
    if (!chatbox.classList.contains("open")) {
      chatbox.hidden = true;
    }
  }, 180);
}

function toggleChat() {
  if (chatbox.hidden || !chatbox.classList.contains("open")) {
    openChat();
  } else {
    closeChat();
  }
}

function appendBubble(text, type = "user") {
  const bubble = document.createElement("div");
  bubble.className = `bubble ${type}`;
  bubble.textContent = text;
  chatHistory.appendChild(bubble);
  chatHistory.scrollTop = chatHistory.scrollHeight;
}

function setTheme(index) {
  const theme = themeData[index];
  if (!theme) return;

  document.documentElement.style.setProperty("--accent", theme.value);
  document.documentElement.style.setProperty("--accent-2", theme.value2);

  document.querySelectorAll("[data-theme-index]").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.themeIndex) === index);
  });
}

document.addEventListener("click", (event) => {
  const actionTarget = event.target.closest("[data-action]");
  if (actionTarget) {
    const action = actionTarget.dataset.action;

    if (action === "share") {
      openModal();
    }

    if (action === "close-modal") {
      closeModal();
    }

    if (action === "chat-toggle") {
      toggleChat();
    }
  }

  const themeTarget = event.target.closest("[data-theme-index]");
  if (themeTarget) {
    setTheme(Number(themeTarget.dataset.themeIndex));
  }

  const tabTarget = event.target.closest("[data-tab]");
  if (tabTarget) {
    const tab = tabTarget.dataset.tab;
    document.querySelectorAll(".tab").forEach((button) => {
      button.classList.toggle("active", button.dataset.tab === tab);
    });
    document.querySelectorAll(".tab-panel").forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.panel === tab);
    });
  }

  const copyTarget = event.target.closest("[data-copy]");
  if (copyTarget) {
    const text = copyTarget.dataset.copy;
    navigator.clipboard?.writeText(text).catch(() => {
      const temp = document.createElement("textarea");
      temp.value = text;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand("copy");
      temp.remove();
    });
    copyTarget.textContent = "Copied";
    window.setTimeout(() => {
      copyTarget.textContent = copyTarget.matches("[data-copy*='iframe']") ? "Copy embed" : "Copy link";
    }, 1200);
  }
});

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".card").forEach((item) => item.classList.remove("selected"));
    card.classList.add("selected");
  });
});

chatForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = chatMessage.value.trim();
  if (!message) return;

  appendBubble(message, "user");
  chatMessage.value = "";

  const typing = document.createElement("div");
  typing.className = "bubble ai";
  typing.textContent = "Đang suy nghĩ...";
  chatHistory.appendChild(typing);
  chatHistory.scrollTop = chatHistory.scrollHeight;

  window.setTimeout(() => {
    typing.textContent = `Gợi ý nhanh: ${message} - mình có thể giúp bạn tinh chỉnh phần này.`;
    chatHistory.scrollTop = chatHistory.scrollHeight;
  }, 900);
});

document.querySelectorAll("[data-quick]").forEach((button) => {
  button.addEventListener("click", () => {
    const text = button.dataset.quick;
    appendBubble(text, "user");
    window.setTimeout(() => {
      appendBubble(`Mình đã ghi nhận: ${text}.`, "ai");
    }, 550);
  });
});

renderQuickList();
renderThemes();
renderCards();
setTheme(0);

if (year) {
  year.textContent = new Date().getFullYear();
}
