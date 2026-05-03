// ================================
// CODING PROGRESS TRACKER 🎯
// ================================

// Score state
let totalScore = 0;
const activityLog = [];

// Grab elements
const totalScoreEl = document.getElementById("total-score");
const levelDisplay = document.getElementById("level-display");
const activityLogEl = document.getElementById("activity-log");
const resetBtn = document.getElementById("reset-btn");
const actionBtns = document.querySelectorAll(".action-btn");

// ================================
// LEVEL SYSTEM
// ================================

function getLevel(score) {
    if (score < 50) return "🌱 Just Getting Started";
    if (score < 150) return "⚡ Building Momentum";
    if (score < 300) return "🔥 Getting Serious";
    if (score < 500) return "💪 Almost There";
    if (score < 1000) return "🚀 Job Ready Soon";
    return "🏆 Frontend Developer!";
}

// ================================
// UPDATE SCORE DISPLAY
// ================================

function updateScore(points, action) {
    // Add points
    totalScore += points;

    // Update score display with bump animation
    totalScoreEl.textContent = totalScore;
    totalScoreEl.classList.add("bump");
    setTimeout(() => totalScoreEl.classList.remove("bump"), 200);

    // Update level
    levelDisplay.textContent = getLevel(totalScore);

    // Add to activity log
    activityLog.unshift({ action, points });
    updateLog();
}

// ================================
// UPDATE ACTIVITY LOG
// ================================

function updateLog() {
    // Clear current log
    activityLogEl.innerHTML = "";

    if (activityLog.length === 0) {
        activityLogEl.innerHTML =
            `<p class="log-empty">Your activities will appear here...</p>`;
        return;
    }

    // Show last 8 activities
    const recent = activityLog.slice(0, 8);

    recent.forEach(entry => {
        const logEntry = document.createElement("div");
        logEntry.classList.add("log-entry");
        logEntry.innerHTML = `
            <span class="log-action">✅ ${entry.action}</span>
            <span class="log-points">+${entry.points} XP</span>
        `;
        activityLogEl.appendChild(logEntry);
    });
}

// ================================
// BUTTON CLICK EVENTS
// ================================

actionBtns.forEach(btn => {
    btn.addEventListener("click", function() {
        const points = parseInt(this.dataset.points);
        const action = this.dataset.action;
        updateScore(points, action);
    });
});

// ================================
// RESET
// ================================

resetBtn.addEventListener("click", function() {
    if (confirm("Reset all progress? This cannot be undone!")) {
        totalScore = 0;
        activityLog.length = 0;
        totalScoreEl.textContent = "0";
        levelDisplay.textContent = "🌱 Just Getting Started";
        updateLog();
    }
});