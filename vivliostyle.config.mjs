import { VFM } from "@vivliostyle/vfm";
import rehypeMermaid from "rehype-mermaid";

export default {
	title: "とにかく楽にMarkdownで本を作りたい！", // populated into `publication.json`, default to `title` of the first entry or `name` in `package.json`.
	author: "erukiti <erukiti+github@gmail.com>", // default to `author` in `package.json` or undefined.
	language: "ja", // default to undefined.
	size: "JIS-B5", // A4: 教科書サイズ、JIS-B5: 最近流行りの小さいサイズの技術書
	theme: [
		"@vivliostyle/theme-techbook@^2.0.0", // .css or local dir or npm package. default to undefined.
		"./fonts",
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

		// 後書き
		"99-postscript.md",
	],
	entryContext: "./manuscripts",

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
		maxLevel: 2, // maximum level of headings. default to 3.
		includeCover: false, // include cover page in table of contents. default to 'false'.
	},
	// cover: './cover.png', // cover image. default to undefined.
	vfm: {
		// options of VFM processor
		//   hardLineBreaks: true, // converts line breaks of VFM to <br> tags. default to 'false'.
		//   disableFormatHtml: true, // disables HTML formatting. default to 'false'.

		customBlocks: [
			{
				name: "column",
				type: "block",
				match: /^:::column\s*$/,
				endMatch: /^:::\s*$/,
			},
		],
	},
	documentProcessor: (config, metadata) => {
		return VFM(config, metadata).use(rehypeMermaid, { strategy: "img-png" });
	},
};
