import { surahsFactory } from "src/surah/surah.factory";

import { readFileSync } from "fs";
import { join } from "path";

export const seed = async () => {
  const jsonData = readFileSync(join(process.cwd() , 'static' ,'json', 'text_with_trans.json')).toString()
  const data = JSON.parse(jsonData).surahs;
    return await surahsFactory(data);
  };