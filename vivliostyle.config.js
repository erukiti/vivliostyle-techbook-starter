module.exports = {
	title: "技術同人誌サンプル", // populated into `publication.json`, default to `title` of the first entry or `name` in `package.json`.
	author: "erukiti <erukiti+github@gmail.com>", // default to `author` in `package.json` or undefined.
	language: "ja", // default to undefined.
	size: "B5", // A4: 教科書サイズ、B5: 最近流行りの小さいサイズの技術書
	theme: "@vivliostyle/theme-techbook@^2.0.0", // .css or local dir or npm package. default to undefined.
	entry: ["00-preface.md", "chap-erukiti.md", "99-postscript.md"],
	entryContext: "./manuscripts", // output: [ // path to generate draft file(s). default to '{title}.pdf'
	//   './output.pdf', // the output format will be inferred from the name.
	//   {
	//     path: './book',
	//     format: 'webpub',
	//   },
	// ],
	workspaceDir: ".vivliostyle", // directory which is saved intermediate files.
	// toc: true, // whether generate and include ToC HTML or not, default to 'false'.
	// cover: './cover.png', // cover image. default to undefined.
	// vfm: { // options of VFM processor
	//   hardLineBreaks: true, // converts line breaks of VFM to <br> tags. default to 'false'.
	//   disableFormatHtml: true, // disables HTML formatting. default to 'false'.
	// },
};
