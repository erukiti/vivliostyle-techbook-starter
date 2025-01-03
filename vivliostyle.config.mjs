import { VFM } from "@vivliostyle/vfm";
import rehypeMermaid from "rehype-mermaid";

console.log(process.argv);

const isPressReady = process.argv.includes("--press-ready");

const def = {
  title: "vivliostyle-sample", // populated into `publication.json`, default to `title` of the first entry or `name` in `package.json`.
  author: "erukiti <erukiti+github@gmail.com>", // default to `author` in `package.json` or undefined.
  language: "ja", // default to undefined.
  size: "JIS-B5", // A4: 教科書サイズ、JIS-B5: 最近流行りの小さいサイズの技術書
  theme: [
    // "@vivliostyle/theme-techbook@^2.0.0", // .css or local dir or npm package. default to undefined.
    "./fonts",
    "./theme-nice-techbook2",
  ],
  entry: [
    // 表紙
    // { rel: "cover" },

    // 前書き
    "00-preface.md",

    // 目次
    { rel: "contents" },

    // 本文
    "chap-setup.md",
    "chap-markdown.md",
    "chap-theme.md",
    "chap-font.md",
    "chap-toc.md",
    "chap-mermaid.md",
    "chap-sample.md",
    "chap-onestop.md",
    // 後書き
    "90-postscript.md",
    "99-colophon.md",
  ],
  entryContext: "./src",

  // output: [ // path to generate draft file(s). default to '{title}.pdf'
  //   './output.pdf', // the output format will be inferred from the name.
  //   {
  //     path: './book',
  //     format: 'webpub',
  //   },
  // ],
  workspaceDir: ".vivliostyle", // directory which is saved intermediate files.
  toc: {
    title: "目次", // title of table of contents. default to 'Contents'.
    sectionDepth: 2,
    includeCover: false, // include cover page in table of contents. default to 'false'.
  },
  // cover: './cover.png', // cover image. default to undefined.
  vfm: {
    // options of VFM processor
    //   hardLineBreaks: true, // converts line breaks of VFM to <br> tags. default to 'false'.
    //   disableFormatHtml: true, // disables HTML formatting. default to 'false'.
  },
  documentProcessor: (config, metadata) => {
    return VFM(config, metadata).use(rehypeMermaid, {
      strategy: "img-png",
      //
      mermaidConfig: {
        fontFamily: "'IBM Plex Serif', 'BIZ UD Mincho', sans-serif",
      },
    });
  },
};

if (isPressReady) {
  def.theme = [
    ...def.theme,
    // グレースケール印刷可能なPDF
    "./theme-nice-techbook2/theme-print-pdf.css",
  ];
} else {
  def.theme = [
    ...def.theme,
    // オンライン向けのフルカラーPDF
    "./theme-nice-techbook2/theme-online-pdf.css",
    "./theme-nice-techbook2/theme-base/css/lib/prism/base.css",
    "./theme-nice-techbook2/theme-base/css/lib/prism/theme-okaidia.css",
  ];
}

export default def;
