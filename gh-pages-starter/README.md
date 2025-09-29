# GitHub Pages 靜態網站範本（含 PWA）

這是一個可直接部署到 GitHub Pages 的最小可用（MVP）範本：`index.html` + `sw.js` + `site.webmanifest` + 小恐龍 icon。

## 一鍵上線（網頁介面）
1. 在 GitHub 建立新 Repository（公開或私有都可）。
2. 下載本專案壓縮檔，將所有檔案上傳到 repo 根目錄（不是子資料夾）。
3. 進入 **Settings → Pages**：
   - **Source** 選擇 `Deploy from a branch`
   - **Branch** 選 `main / (root)`，按 **Save**
4. 等 10~60 秒，頁面會顯示你的網站網址，例如：`https://你的帳號.github.io/你的repo/`。

## 使用 Git（本機）
```bash
git clone https://github.com/<你的帳號>/<你的repo>.git
cd <你的repo>
# 將本專案檔案複製到此資料夾
git add .
git commit -m "init site"
git push origin main
```
然後到 **Settings → Pages** 啟用 Pages。

## 自訂網域（可選）
在自有網域 DNS 新增 CNAME 指向 `username.github.io.`，
再到 repo 的 **Settings → Pages → Custom domain** 綁定網域，並勾選 Enforce HTTPS。

## PWA 說明
- `sw.js` 提供離線快取與基本離線回退。
- `site.webmanifest` + `icons` 讓網站可「加到主畫面」。
- 首次於 GitHub Pages 連線開啟後，按頁面上的「安裝到主畫面」即可（不同裝置文案略有差異）。

## 修改內容
- 直接編輯 `index.html`、CSS、JS 即可。
- 如增刪檔案，記得同步更新 `sw.js` 的 `CORE` 清單或改用更進階的 SW 打包流程（如 Workbox）。
