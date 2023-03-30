import {readFileSync} from 'fs';

// 加载英文词典
const wordsFile = readFileSync('words_alpha.txt', 'utf8');
export const words = new Set(wordsFile.split('\r\n'));
export const custom_dic = new Set(["wo", "pm", "rm", "sop"]);
