const { test, expect } = require("@playwright/test");

/**
 * ✅ POSITIVE TEST CASES
 * Testing valid Singlish-to-Sinhala translations
 */
const positiveTestCases = [
  {
    tcId: 'Pos_Fun_0001',
    testCaseName: 'Conditional complex sentence',
    inputLengthType: 'S',
    input: 'oya call karoth mama enavaa',
    expectedOutput: 'ඔය call කරොත් මම එනවා',
    category: 'Daily language usage',
    sentenceType: 'Simple sentence',
    qualityFocus: 'Accuracy validation'
  },
  {
    tcId: 'Pos_Fun_0002',
    testCaseName: 'Extra spaces handling',
    inputLengthType: 'S',
    input: 'api passe kathaa karamu',
    expectedOutput: 'අපි පස්සෙ කතා කරමු',
    category: 'Formatting handling (extra spaces)',
    sentenceType: 'Simple sentence',
    qualityFocus: 'Accuracy validation'
  },
  {
    tcId: 'Pos_Fun_0003',
    testCaseName: 'Convert a simple daily question',
    inputLengthType: 'S',
    input: 'oya adha gedhara inne dha?',
    expectedOutput: 'ඔය අද ගෙදර ඉන්නේ ද?',
    category: 'Greeting / request / response',
    sentenceType: 'Interrogative (question)',
    qualityFocus: 'Accuracy validation'
  },
  {
    tcId: 'Pos_Fun_0004',
    testCaseName: 'Convert compound sentence',
    inputLengthType: 'M',
    input: 'mama enna hadhannee namuth vaessa nisaa enne bae',
    expectedOutput: 'මම එන්න හදන්නේ නමුත් වැස්ස නිසා එන්න බැහැ',
    category: 'Daily language usage',
    sentenceType: 'Compound sentence',
    qualityFocus: 'Accuracy validation'
  },
  {
    tcId: 'Pos_Fun_0005',
    testCaseName: 'Convert polite request',
    inputLengthType: 'M',
    input: 'karunaakara oyaata meeka thiyaaganna puluvandha',
    expectedOutput: 'කරුනාකර ඔයාට මේක තියාගන්න පුලුවන්ද',
    category: 'Greeting / request / response',
    sentenceType: 'Imperative (command)',
    qualityFocus: 'Accuracy validation'
  },
  {
    tcId: 'Pos_Fun_0006',
    testCaseName: 'Numeric value handling',
    inputLengthType: 'S',
    input: 'class eka 8ta patan gannavaa',
    expectedOutput: 'class එක 8ට පටන් ගන්නවා',
    category: 'Punctuation / numbers',
    sentenceType: 'Simple sentence',
    qualityFocus: 'Accuracy validation'
  },
  {
    tcId: 'Pos_Fun_0007',
    testCaseName: 'Mixed English noun usage',
    inputLengthType: 'M',
    input: 'mata computer ekak ganna oonee',
    expectedOutput: 'මට computer එකක් ගන්න ඕනේ',
    category: 'Mixed Singlish + English',
    sentenceType: 'Simple sentence',
    qualityFocus: 'Accuracy validation'
  },
  {
    tcId: 'Pos_Fun_0008',
    testCaseName: 'Family-related sentence',
    inputLengthType: 'S',
    input: 'mage amma gedhara inne',
    expectedOutput: 'මගේ අම්මා ගෙදර ඉන්නේ',
    category: 'Daily language usage',
    sentenceType: 'Simple sentence',
    qualityFocus: 'Accuracy validation'
  },
  {
    tcId: 'Pos_Fun_0009',
    testCaseName: 'Mixed sentence with English verb',
    inputLengthType: 'M',
    input: 'mama report eka submit karanavaa',
    expectedOutput: 'මම report එක submit කරනවා',
    category: 'Mixed Singlish + English',
    sentenceType: 'Simple sentence',
    qualityFocus: 'Accuracy validation'
  },
  {
    tcId: 'Pos_Fun_0010',
    testCaseName: 'English technical/brand terms embedded in Singlish',
    inputLengthType: 'M',
    input: 'mama Samsung phone ekata WhatsApp install karala thiyenavaa',
    expectedOutput: 'මම Samsung phone එකට WhatsApp install කරල තියෙනවා',
    category: 'Mixed Singlish + English',
    sentenceType: 'Simple sentence',
    qualityFocus: 'Accuracy validation'
  },
  {
    tcId: 'Pos_Fun_0011',
    testCaseName: 'Negation patterns',
    inputLengthType: 'S',
    input: 'mata ehema karanna bae',
    expectedOutput: 'මට එහෙම කරන්න බැ',
    category: 'Daily language usage',
    sentenceType: 'Negation (negative form)',
    qualityFocus: 'Accuracy validation'
  },
  {
    tcId: 'Pos_Fun_0012',
    testCaseName: 'Convert simple past tense',
    inputLengthType: 'S',
    input: 'mama iiyee gedhara giyaa.',
    expectedOutput: 'මම ඊයේ ගෙදර ගියා.',
    category: 'Daily language usage',
    sentenceType: 'Past tense',
    qualityFocus: 'Accuracy validation'
  },
  {
    tcId: 'Pos_Fun_0013',
    testCaseName: 'Convert interrogative sentence',
    inputLengthType: 'S',
    input: 'oyaa kavadhdha enna hithan inne?',
    expectedOutput: 'ඔයා කවද්ද එන්න හිතන් ඉන්නේ?',
    category: 'Daily language usage',
    sentenceType: 'Interrogative (question)',
    qualityFocus: 'Accuracy validation'
  },
  {
    tcId: 'Pos_Fun_0014',
    testCaseName: 'Plural noun usage',
    inputLengthType: 'S',
    input: 'lamayi paasal yannee',
    expectedOutput: 'ළමයි පාසල් යන්නේ',
    category: 'Daily language usage',
    sentenceType: 'Plural form',
    qualityFocus: 'Accuracy validation'
  },
  {
    tcId: 'Pos_Fun_0015',
    testCaseName: 'Convert input with currency',
    inputLengthType: 'S',
    input: 'Rs. 5556',
    expectedOutput: 'Rs. 5556',
    category: 'Punctuation / numbers',
    sentenceType: 'Simple sentence',
    qualityFocus: 'Accuracy validation'
  },
  {
    tcId: 'Pos_Fun_0016',
    testCaseName: 'Convert input with date format',
    inputLengthType: 'S',
    input: 'dhesaembar 25',
    expectedOutput: 'දෙසැම්බර් 25',
    category: 'Punctuation / numbers',
    sentenceType: 'Simple sentence',
    qualityFocus: 'Accuracy validation'
  },
  {
    tcId: 'Pos_Fun_0017',
    testCaseName: 'Convert present tense action',
    inputLengthType: 'S',
    input: 'mama dhaen kaeema hadhanavaa',
    expectedOutput: 'මම දැන් කෑම හදනවා',
    category: 'Daily language usage',
    sentenceType: 'Present tense',
    qualityFocus: 'Accuracy validation'
  },
  {
    tcId: 'Pos_Fun_0018',
    testCaseName: 'Convert future tense statement',
    inputLengthType: 'S',
    input: 'mama heta oyaava hambenna enavaa',
    expectedOutput: 'මම හෙට ඔයාව හම්බෙන්න එනවා',
    category: 'Daily language usage',
    sentenceType: 'Future tense',
    qualityFocus: 'Accuracy validation'
  },
  {
    tcId: 'Pos_Fun_0019',
    testCaseName: 'Convert imperative command',
    inputLengthType: 'S',
    input: 'vahaama methanata  enna.',
    expectedOutput: 'වහාම මෙතනට  එන්න',
    category: 'Daily language usage',
    sentenceType: 'Imperative (command)',
    qualityFocus: 'Accuracy validation'
  },
  {
    tcId: 'Pos_Fun_0020',
    testCaseName: 'Convert negative sentence',
    inputLengthType: 'S',
    input: 'mama eeka mokakdha kiyala dhanne naee',
    expectedOutput: 'මම ඒක මොකක්ද කියල දන්නෙ නෑ',
    category: 'Daily language usage',
    sentenceType: 'Negation (negative form)',
    qualityFocus: 'Accuracy validation'
  },
  {
    tcId: 'Pos_Fun_0021',
    testCaseName: 'Convert simple greeting',
    inputLengthType: 'S',
    input: 'aayuboovan!',
    expectedOutput: 'ආයුබෝවන්!',
    category: 'Greeting / request / response',
    sentenceType: 'Simple sentence',
    qualityFocus: 'Accuracy validation'
  },
  {
    tcId: 'Pos_Fun_0022',
    testCaseName: 'Extra spaces normalized',
    inputLengthType: 'M',
    input: 'mama    office    yanavaa',
    expectedOutput: 'මම office යනවා',
    category: 'Formatting handling (extra spaces)',
    sentenceType: 'Simple sentence',
    qualityFocus: 'Accuracy validation'
  },
  {
    tcId: 'Pos_Fun_0023',
    testCaseName: 'Convert advice sentence',
    inputLengthType: 'M',
    input: 'oyaa hodhatama vaedakaranne nam success venavaa',
    expectedOutput: 'ඔයා හොඳටම වැඩ කරන්නේ නම් සක්සස් වෙනවා',
    category: 'Daily language usage',
    sentenceType: 'Complex sentence',
    qualityFocus: 'Accuracy validation'
  },
  {
    tcId: 'Pos_Fun_0024',
    testCaseName: 'Convert obligation sentence',
    inputLengthType: 'M',
    input: 'oyaa adha anivaaryenma enne oonee',
    expectedOutput: 'ඔයා අද අනිවාර්යෙන්ම එන්නෙ ඕනේ',
    category: 'Daily language usage',
    sentenceType: 'Imperative (command)',
    qualityFocus: 'Accuracy validation'
  }
];

/**
 * ❌ NEGATIVE TEST CASES
 * Testing edge cases, error handling, and robustness
 */
const negativeTestCases = [
  {
    tcId: 'Neg_Fun_0002',
    testCaseName: 'Fail on heavily misspelled slang sentence',
    inputLengthType: 'M',
    input: 'adooo mokakda bn oyaa mehema karalaa thiyenne loku awl ekakne',
    expectedOutput: 'අඩෝ මොකක්ද බං ඔයා මෙහෙම කරලා තියෙන්නේ ලොකු අවුලක් නේ',
    category: 'Slang / informal language',
    sentenceType: 'Complex sentence',
    qualityFocus: 'Robustness validation',
    shouldFail: true
  },
  {
    tcId: 'Neg_Fun_0003',
    testCaseName: 'Fail on rare colloquial expression with informal tone',
    inputLengthType: 'M',
    input: 'ado manda kiyapanne, mata eka hariyata therum ganna ba kiyala',
    expectedOutput: 'අඩෝ මන්ද කියපන්නේ, මට එක හරියට තේරුම් ගන්න බැ කියලා',
    category: 'Slang / informal language',
    sentenceType: 'Complex sentence',
    qualityFocus: 'Robustness validation',
    shouldFail: true

  },
  {
    tcId: 'Neg_Fun_0003',
    testCaseName: 'Unsupported special symbols in input',
    inputLengthType: 'S',
    input: 'mama naanna yanavaa @@@',
    expectedOutput: 'මම නාන්න යනවා @@@',
    category: 'Typographical error handling',
    sentenceType: 'Simple sentence',
    qualityFocus: 'Robustness validation',
    shouldFail: true
  },
  {
    tcId: 'Neg_Fun_0004',
    testCaseName: 'Mixed numeric and text ordering issue',
    inputLengthType: 'S',
    input: 'meeting eka 10 wenida?',
    expectedOutput: 'meeting එක 10 වෙනිද?',
    category: 'Punctuation / numbers',
    sentenceType: 'Interrogative (question)',
    qualityFocus: 'Robustness validation',
    shouldFail: true
  },
  {
    tcId: 'Neg_Fun_0005',
    testCaseName: 'Long paragraph input handling',
    inputLengthType: 'L',
    input: 'mama adha udeta awilla office weda patan gatta. passe meeting thibuna saha report ekath hadanna unaa.',
    expectedOutput: 'මම අද උදේට ආවිල්ල office වැඩ පටන් ගත්ත. පස්සේ meeting තිබුණා සහ report එකත් හදන්න උනා.',
    category: 'Daily language usage',
    sentenceType: 'Compound sentence',
    qualityFocus: 'Robustness validation',
    shouldFail: true
  },
  {
    tcId: 'Neg_Fun_0006',
    testCaseName: 'Fail on joined words without spaces',
    inputLengthType: 'S',
    input: 'mamapolatayanavaa',
    expectedOutput: 'මම  පොලට  යනවා',
    category: 'Typographical error handling',
    sentenceType: 'Simple sentence',
    qualityFocus: 'Robustness validation',
    shouldFail: true
  },
  {
    tcId: 'Neg_Fun_0007',
    testCaseName: 'Convert sentence with excessive repeated letters',
    inputLengthType: 'S',
    input: 'mamaaaa gedharaaaa yanavaaaa',
    expectedOutput: 'Incorrect Sinhala transliteration',
    category: 'Typographical error handling',
    sentenceType: 'Simple sentence',
    qualityFocus: 'Robustness validation',
    shouldFail: true
  },
  {
    tcId: 'Neg_Fun_0008',
    testCaseName: 'Convert input with random English words',
    inputLengthType: 'M',
    input: 'mama gedhara yanavaa because weather is bad today',
    expectedOutput: 'Partially converted Sinhala output',
    category: 'Mixed Singlish + English',
    sentenceType: 'Compound sentence',
    qualityFocus: 'Robustness validation',
    shouldFail: true
  },
  {
    tcId: 'Neg_Fun_0009',
    testCaseName: 'Convert extremely long unsegmented text',
    inputLengthType: 'L',
    input: 'mamagedharayanavaoyaaennavadhamataeekaooneeapihetaennava',
    expectedOutput: 'Incorrect or unreadable Sinhala output',
    category: 'Typographical error handling',
    sentenceType: 'Complex sentence',
    qualityFocus: 'Robustness validation',
    shouldFail: true
  },
  {
    tcId: 'Neg_Fun_0010',
    testCaseName: 'Convert numbers-only input',
    inputLengthType: 'S',
    input: '987654321',
    expectedOutput: 'No meaningful Sinhala text',
    category: 'Punctuation / numbers',
    sentenceType: 'Simple sentence',
    qualityFocus: 'Robustness validation',
    shouldFail: true
  }
];

/**
 * 🎨 UI TEST CASES
 * Testing user interface behavior and interactions
 */
const uiTestCases = [
  {
    tcId: 'Pos_UI_0001',
    testCaseName: 'Verify UI behavior with punctuation marks',
    inputLengthType: 'S',
    input: 'mama gedhara yanavaa!',
    expectedOutput: 'මම ගෙදර යනවා!',
    category: 'Punctuation / numbers',
    sentenceType: 'Simple sentence',
    qualityFocus: 'Real-time output update behavior'
  }
];

// Combine all test cases
const allTestCases = [
  ...positiveTestCases,
  ...negativeTestCases,
  ...uiTestCases
];


/**
 * 🔁 TEST EXECUTION
 * Dynamic test generation for all test cases
 */
for (const tc of allTestCases) {
  test(`${tc.tcId} - ${tc.testCaseName}`, async ({ page }) => {
    
    // 🔗 Navigate to SwiftTranslator
    await page.goto("https://www.swifttranslator.com/");
    
    // ⏱️ Wait for page to load completely
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1500);
    
    // ✏️ Input the Singlish text
    const inputTextarea = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    await inputTextarea.waitFor({ state: 'visible', timeout: 10000 });
    await inputTextarea.clear();
    await inputTextarea.fill(tc.input);
    
    // ⏳ Wait for auto-translation to occur (site translates automatically)
    await page.waitForTimeout(3000);
    
    // 📤 Capture the translated output from the output DIV
    const outputDiv = page.locator('div.w-full.h-80.p-3.rounded-lg').filter({ hasText: /[\u0D80-\u0DFF]/ }).first();
    
    let actualOutput = "";
    try {
      await outputDiv.waitFor({ state: 'visible', timeout: 5000 });
      actualOutput = await outputDiv.textContent();
      actualOutput = actualOutput?.trim() || "";
    } catch (error) {
      console.warn(`Warning: Could not find output for ${tc.tcId}`);
      actualOutput = "";
    }
    
    // 🔍 Assertions based on test type
    // Both positive and negative tests use same assertion
    // Negative tests are EXPECTED to fail because bad input produces incorrect output
    expect(actualOutput?.trim()).toContain(tc.expectedOutput);
    
    if (tc.shouldFail) {
      console.log(`[NEGATIVE TEST] ${tc.tcId}: Test failed as expected - bad input produced incorrect output`);
    } else {
      console.log(`[POSITIVE TEST] ${tc.tcId}: ✓ Passed`);
    }
    
    // 📊 Log test details for reporting
    console.log({
      testId: tc.tcId,
      category: tc.category,
      sentenceType: tc.sentenceType,
      inputLength: tc.inputLengthType,
      input: tc.input,
      expected: tc.expectedOutput,
      actual: actualOutput
    });
  });
}
