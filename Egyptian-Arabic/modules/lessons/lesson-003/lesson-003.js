import { speaker1, speaker2, speaker4, narrator, audiobook } from "../lesson-001/lesson-001.js"

export const lesson003 = {
  chapter: 'Meeting and greeting',
  title: 'Goodbye',
  sections: [
    {
      title: 'Introduction',
      slides: [
        {
          type: 'intro',
          imgURl: './modules/lessons/lesson-003/images/001.png',
          title: 'Introduction',
          intro: true,
          description: `With people coming and going and saying goodbye to each other around him,
          ${speaker1} does not know what he should do. Then ${speaker4} and her aunt ${speaker2} return and offer to help him.`
        },
        {
          type: 'intro',
          imgURl: './modules/lessons/lesson-003/images/001.png',
          title: 'Introduction',
          intro: true,
          description: 'In this lesson you will learn:',
          goals: [
            '1- different ways to say goodbye',
            "2- to distinguish between formal and informal ways of saying goodbye",
            '3- to conduct short conversations',
          ],
        }
      ]
    },
    {
      title: 'Story',
      slides: [
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-003/images/002.png',
          convo: 'اشوف وشك بخير',
          speaker: speaker4,
          vocab: [
            {word: 'اشوف', meaning: '{I} see', url: '/audio1970771774_03.mp3'},
            {word: 'وش', meaning: 'face', url: '/audio1970771774_03.mp3'},
            {word: 'ك', meaning: 'your', url: '/audio1970771774_03.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-003/images/003.png',
          convo: 'سلام',
          speaker: speaker4,
          vocab: [
            {word: 'سلام', meaning: 'Bye (informal)', url: '/audio1970771774_03.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-003/images/004.png',
          convo: 'مع السلامة يا فندم',
          speaker: 'man on phone',
          vocab: [
            {word: 'مع', meaning: 'with', url: '/audio1970771774_03.mp3'},
            {word: 'السلامة', meaning: 'safety', url: '/audio1970771774_03.mp3'},
            {word: 'حبيبتي', meaning: 'my love', url: '/audio1970771774_03.mp3'},
            {word: 'مع السلامة', meaning: 'goodbye (formal & informal)', url: '/audio1970771774_03.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-003/images/005.png',
          convo: 'مع الف سلامة',
          speaker: 'man on phone',
          vocab: [
            {word: 'الف', meaning: 'thousand', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-003/images/006.png',
          convo: 'فيه مشكلة ولا حاجة؟',
          speaker: narrator,
          vocab: [
            {word: 'فيه', meaning: 'there is/are', url: '/audio1970771774_01.mp3'},
            {word: 'مشكلة', meaning: 'problem', url: '/audio1970771774_01.mp3'},
            {word: 'حاجة', meaning: 'something', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-003/images/007.png',
          convo: 'محتاج مساعدة؟',
          speaker: speaker4,
          vocab: [
            {word: 'محتاج', meaning: 'need', url: '/audio1970771774_01.mp3'},
            {word: 'مساعدة', meaning: 'help', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-003/images/008.png',
          convo: 'ايوة محتاج مساعدة',
          speaker: 'man',
          vocab: [
            {word: 'مفيش جديد', meaning: 'no new words', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-003/images/009.png',
          convo: 'فين الشنطة',
          speaker: 'taxi driver',
          vocab: [
            {word: 'فين', meaning: 'where', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-003/images/010.png',
          convo: 'الشنطة مع السلامة',
          speaker: 'man',
          vocab: [
            {word: 'مفيش جديد', meaning: 'no new words', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-003/images/011.png',
          convo: 'في التاكسي',
          speaker: speaker1,
          vocab: [
            {word: 'مفيش جديد', meaning: 'no new words', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-003/images/012.png',
          convo: 'استنا',
          speaker: speaker1,
          vocab: [
            {word: 'استنا', meaning: 'wait', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-003/images/013.png',
          convo: 'معلش؟ الشنطة؟',
          speaker: speaker4,
          vocab: [
            {word: 'معلش', meaning: 'sorry', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-003/images/014.png',
          convo: 'اه الشنطة جميلة',
          speaker: speaker4,
          vocab: [
            {word: 'اه', meaning: 'yes', url: '/audio1970771774_01.mp3'},
            {word: 'جميلة', meaning: 'beautiful', url: '/audio1970771774_01.mp3'},
          ]
        },
        {
          type: 'Story',
          imgURl: './modules/lessons/lesson-003/images/015.png',
          convo: 'دنيا تعالي هنا',
          speaker: speaker2,
          vocab: [
            {word: 'تعالي', meaning: 'come (f)', url: '/audio1970771774_01.mp3'},
            {word: 'هنا', meaning: 'here', url: '/audio1970771774_01.mp3'},
          ]
        },
      ]
    },
    {
      title: 'vocabulary excersises',
      slides: [
        {
          type: 'section-intro',
        },
        {
          type: 'vocabulary excersises',
          title: 'flash cards',
          quizletUrl: "https://quizlet.com/878073234/flashcards/embed?i=2zi8pz&x=1jj1",
        },
        {
          type: 'vocabulary excersises',
          title: 'Learn',
          quizletUrl: "https://quizlet.com/878073234/learn/embed?i=2zi8pz&x=1jj1",
        },
        {
          type: 'vocabulary excersises',
          title: 'Spell',
          quizletUrl: "https://quizlet.com/878073234/write/embed?i=2zi8pz&x=1jj1",
        },
        {
          type: 'vocabulary excersises',
          title: 'test',
          quizletUrl: "https://quizlet.com/878073234/test/embed?i=2zi8pz&x=1jj1",
        },
        {
          type: 'vocabulary excersises',
          title: 'play',
          quizletUrl: "https://quizlet.com/878073234/match/embed?i=2zi8pz&x=1jj1",
        },
      ]
    },
    {
      title: 'Grammar',
      slides: [
        {
          type: 'section-intro',
          imgURl:'./modules/lessons/lesson-003/images/001.png'
        },
        {
          type: 'grammar',
          title: 'explanation',
          imgURl: './modules/lessons/lesson-003/images/001.png',
          description: `Some Egyptian words are easy to understand because they are international.
          They are the same in other languages, and are hardly ever different in meaning from the
          original.`
        },
        {
          type: 'grammar',
          title: 'explanation',
          imgURl: './modules/lessons/lesson-003/images/001.png',
          description: `Some of these words are taxi, bank, and computer`
        },
        {
          type: 'grammar',
          title: 'explanation',
          imgURl: './modules/lessons/lesson-003/images/001.png',
          description: `Many of these words have Latin or Greek roots and were first adopted into
          European languages before they spread around the world.`
        },
        {
          type: 'grammar',
          title: 'explanation',
          imgURl: './modules/lessons/lesson-003/images/001.png',
          description: `These words, which exist in various languages and which have similar
          meanings everywhere, are called international words.`
        },
        {
          type: 'grammar',
          title: 'explanation',
          imgURl: './modules/lessons/lesson-003/images/001.png',
          description: `Many of them stem from English, like Computer. Others come from Arabic itself like Kaffee`
        },
      ]
    },
  ]
}
