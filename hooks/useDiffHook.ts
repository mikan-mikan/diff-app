import { type Change, diffChars } from 'diff';
import { ref } from 'vue';

type Props = {
  textA: globalThis.Ref<string>;
  textB: globalThis.Ref<string>;
  diffAResult: globalThis.Ref<string>;
  diffBResult: globalThis.Ref<string>;
  compareTexts: () => void;
};

export const useDiffHook = (): Props => {
  const textA = ref('');
  const textB = ref('');
  const diffAResult = ref('');
  const diffBResult = ref('');

  const compareTexts = (): Props => {
    const diffLeft = diffChars(textA.value, textB.value);
    const diffRight = diffChars(textB.value, textA.value);
    const colorRed = '#c397a8';
    const colorGreen = '#92b3b5';
    const colorWhite = 'transparent';

    const addedResult = (text: string, colorName: string): string => {
      let createResult = '';
      // XSS対策
      for (let j = 0; j < text.length; j++) {
        // 半角スペースをHTMLエンティティに変換
        if (text[j] === ' ') {
          createResult += '&nbsp;';
        } else {
          createResult += `<span style="background-color:${colorName}">${text[j]}</span>`;
        }
      }
      return createResult;
    };

    const colorizeDiff = (part: Change, colorName: string): void => {
      if (part.added === true) {
        return;
      }

      const backgroundColor = part.removed ? colorName : colorWhite;
      const brCount = part.value.match(/\n/g);
      if (brCount) {
        const textArray = part.value.split(/(\n)/g);
        if (!textArray) {
          return;
        }
        for (let i = 0; i < textArray.length; i++) {
          if (textArray[i] === '\n') {
            result += `<br>`;
          } else {
            result += addedResult(textArray[i], backgroundColor);
          }
        }
      } else {
        result += addedResult(part.value, backgroundColor);
      }
    };

    let result = '';
    diffLeft.forEach((part) => {
      colorizeDiff(part, colorGreen);
    });
    diffAResult.value = result;

    result = '';
    diffRight.forEach((part) => {
      colorizeDiff(part, colorRed);
    });
    diffBResult.value = result;

    return { textA, textB, diffAResult, diffBResult, compareTexts };
  };

  return { textA, textB, diffAResult, diffBResult, compareTexts };
};
