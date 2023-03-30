import {readFileSync} from 'fs';

// 加载英文词典
const wordsFile = readFileSync('words_alpha.txt', 'utf8');
export const words = new Set(wordsFile.split('\n').map(x => x.trim()));

export const custom_dic = new Set(["wo", "pm", "rm", "sop", "list", "task", "state", "quantity", "user", "description"]);
