# TRIVERA 採用サイト

## 概要

TRIVERAの採用サイトです。Figmaデザインに基づいて、HTML、CSS、JavaScriptで実装されています。

## 特徴

### デザイン
- **モダンでダイナミックなUI**: 青をベースとしたグラデーションと、アクセントカラーのティールを使用
- **レスポンシブデザイン**: デスクトップ、タブレット、モバイルに対応
- **アクセシビリティ**: キーボードナビゲーション対応

### アニメーション
1. **背景フェードイン**: ページロード時に背景が段階的にフェードイン
2. **左からフェードイン**: 見出しやテキストが左からスライドしながらフェードイン
3. **下からフェードイン**: スクロール時にセクションや要素が下からフェードイン
4. **ホバー効果**: マウスホバー時に線が左から右へフェードイン

### セクション構成
1. **Hero**: メインビジュアルとキャッチコピー
2. **Movie**: 動画セクションと会社紹介テキスト
3. **01 News**: 最新情報
4. **02 Interviews**: 社員インタビュー
5. **03 Services**: 事業内容
6. **04 Vision & Mission**: ビジョンとミッション
7. **05 Welfare**: 福利厚生
8. **06 Numbers**: 数字で見る会社
9. **07 About**: 会社情報へのリンク
10. **08 FAQ**: よくある質問
11. **09 SNS**: SNSリンク
12. **Footer**: フッター

## ファイル構成

```
careers_site/
├── index.html       # メインHTML
├── styles.css       # スタイルシート
├── script.js        # JavaScriptアニメーション
└── README.md        # このファイル
```

## 使用技術

- **HTML5**: セマンティックなマークアップ
- **CSS3**: 
  - Flexbox / Grid Layout
  - CSS Variables (カスタムプロパティ)
  - CSS Animations / Transitions
  - Media Queries (レスポンシブデザイン)
- **JavaScript (Vanilla)**:
  - Intersection Observer API (スクロールアニメーション)
  - DOM Manipulation
  - Event Handling

## セットアップ

1. リポジトリをクローンまたはダウンロード
2. `index.html`をブラウザで開く

```bash
# ローカルサーバーを使用する場合（推奨）
# Python 3の場合
python -m http.server 8000

# Node.jsのhttp-serverを使用する場合
npx http-server -p 8000
```

3. ブラウザで `http://localhost:8000` を開く

## カスタマイズ

### カラースキーム

`styles.css`の`:root`セクションでカラー変数を変更できます：

```css
:root {
    --color-blue-primary: #0093F6;
    --color-blue-gradient-1: #255FFF;
    --color-blue-gradient-2: #2796E1;
    --color-teal: #A8FFDC;
    --color-sand: #FCF8F3;
    --color-light-blue: #EFF1F7;
    /* ... */
}
```

### フォント

デフォルトではシステムフォントを使用していますが、Web フォントに変更する場合は以下を追加：

```html
<!-- index.html の <head> 内に追加 -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&display=swap" rel="stylesheet">
```

### アニメーションの調整

`script.js`内の各関数でアニメーションのタイミングや遅延を調整できます：

```javascript
// 要素ごとのスタッガー遅延を変更
animateElements('.news-item', 100);  // 100ms → 好みの値に変更
```

## ブラウザサポート

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## パフォーマンス最適化

実装済みの最適化：
- CSS transitionsとanimationsを使用
- Intersection Observer APIによる効率的なスクロール検知
- 画像の遅延読み込み準備（実装時に`loading="lazy"`を追加）
- レスポンシブ画像対応準備

## 今後の改善案

1. **画像の最適化**: 
   - WebP形式の採用
   - 適切なサイズの画像生成
   - CDN経由での配信

2. **アクセシビリティの強化**:
   - ARIAラベルの追加
   - キーボードナビゲーションの改善
   - スクリーンリーダー対応

3. **パフォーマンス**:
   - Critical CSSの分離
   - JavaScriptの遅延読み込み
   - Service Workerによるキャッシング

4. **機能追加**:
   - FAQアコーディオン機能
   - 応募フォーム実装
   - 多言語対応

## ライセンス

このプロジェクトは TRIVERA Inc. の所有物です。

## 連絡先

質問や提案がある場合は、プロジェクトの管理者に連絡してください。

---

**最終更新**: 2025年12月30日

