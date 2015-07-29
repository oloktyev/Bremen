angular.module('starter.services', [])

.factory('Chats', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [{
        id: 0,
        name: 'Ben Sparrow',
        lastText: 'You on your way?',
        face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
    }, {
        id: 1,
        name: 'Max Lynx',
        lastText: 'Hey, it\'s me',
        face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
    }, {
        id: 2,
        name: 'Adam Bradleyson',
        lastText: 'I should buy a boat',
        face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
    }];

    return {
        all: function () {
            return chats;
        },
        remove: function (chat) {
            chats.splice(chats.indexOf(chat), 1);
        },
        get: function (chatId) {
            for (var i = 0; i < chats.length; i++) {
                if (chats[i].id === parseInt(chatId)) {
                    return chats[i];
                }
            }
            return null;
        }
    };
})


.factory('DreamWords', function () {
    // Might use a resource here that returns a JSON array
    /*
    var db = window.sqlitePlugin.openDatabase({ name: "bremen.db", createFromLocation: 1 });
    tx.executeSql("select * from DreamWord;", [], function (tx, res) {
    });
    */

    // Some fake testing data
    var dreamWords = [{
        id: 1,
        name: 'Ангел',
        description: 'Увидеть во сне ангела - хороший знак. Вас ждут спокойные и очень счастливые времена. <br/><br/>Увидеть во сне ангела над головой кого-то из близких вам людей - предвестие того, что скоро душа этою человека отойдет в мир иной. Если во сне вы видите ангела за спиной неизвестного вам человека, то в не столь отдаленном времени вы получите неожиданное известие о смерти высокопоставленного, благородного, известного лично вам человека. <br/><br/>Если вам приснилось, что вы - ангел, то такой сон означает, что вам следует задуматься о том, как вы расходуете доходы, которые приносит ваша деятельность. Вам нужно подумать о ближних своих и поделиться с ними своей прибылью, ибо вы можете лишиться своего богатства в один миг. <br/><br/>Если во сне ангел зовет вас на небеса, то такой сон предупреждает вас о серьезной болезни, которая угрожает вашему телу. Обратитесь к врачевателям, они помогут вам. <br/><br/>',
        dreamBookId: 1
    },
    {
        id: 2,
        name: 'Башня',
        description: 'В сновидении башня символизирует возвышенность чувств, преодоление препятствий или недосягаемую мечту. <br/><br/>Если во сне вы с большим трудом поднимаетесь по ступенькам на верхушку башни - это знак того, что наяву вам придется преодолеть множество препятствий, прежде чем достигнете поставленной цели. <br/><br/>Сон, в котором вы видите перед собой высокую красивую башню, символизирует возвышенность чувств и желаний, которые переполняют ваше сердце. <br/><br/>Если во сне башня упала и разрушилась, а вы стоите среди обломков - это означает, что вы своими необдуманными решениями и поступками разрушите свое счастье. <br/><br/>На речном берегу вы строите башню из песка, которую смывает волной, - это символизирует глубокое разочарование от того, что все ваши усилия окажутся напрасными и воплотятся только в ваших фантазиях. <br/><br/>Сон, в котором вы прыгнули с высокой башни и не разбились, - знак того, что вам придется принимать очень важное и ответственное решение, результат которого зависит только от вас. <br/><br/>Если во сне вы находитесь внутри башни, которая должна разрушиться, и блуждаете по лестницам в поисках выхода - наяву вы станете свидетелем или участником социальных потрясении. <br/><br/>Во сне вы строите высокую башню и сами складываете огромные и тяжелые камни - это означает, что наяву вы сможете преодолеть все жизненные тяготы, чтобы добиться желаемого. <br/><br/>',
        dreamBookId: 1
    },
    {
        id: 3,
        name: 'Болезнь',
        description: 'Не стоит воспринимать появление этого символа во сне как нечто трагическое. По библейской трактовке болезнь посылается людям в качестве наказания за совершенные грехи и для очищения мыслей, чувств, поступков. Для человека этот символ является предупреждением о том, что пришло время пересмотреть свою позицию и жизненные ценности. <br/><br/>Сон, в котором вы увидели себя страдающим от тяжелой и неизлечимой болезни, свидетельствует о том, что наяву вы совершили некрасивый поступок и в душе осуждаете себя за минутную слабость. <br/><br/>Увидеть во сне близкого вам человека больным - знак того, что наяву вашим близким необходима поддержка и внимание. <br/><br/>Во сне вы увидели на выжженной земле толпы людей, умирающих на улицах от тяжелой и неизлечимой болезни, - этот сон предвещает экологическое бедствие, вызванное применением бактериологического оружия. Возможно, вы станете свидетелем этой катастрофы. <br/><br/>Видеть себя во сне выздоравливающим после тяжелой болезни - наяву вам удастся избежать неприятной ситуации. <br/><br/>Если во сне близкий вам человек умер от тяжелой болезни - это означает испорченные отношения и личные проблемы. <br/><br/>',
        dreamBookId: 2
    }];

    return {
        all: function () {
            return dreamWords;
        },
        remove: function (dreamWord) {
            dreamWords.splice(dreamWords.indexOf(dreamWord), 1);
        },
        get: function (dreamWordId) {
            for (var i = 0; i < dreamWords.length; i++) {
                if (dreamWords[i].id === parseInt(dreamWordId)) {
                    return dreamWords[i];
                }
            }
            return null;
        },
        find: function (searchText) {
            var result = new Array();
            for (var i = 0; i < dreamWords.length; i++) {
                if (dreamWords[i].name.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
                    result.push(dreamWords[i]);
                }
            }
            return result;
        },
        getByBook: function (bookId) {
            var result = new Array();
            for (var i = 0; i < dreamWords.length; i++) {
                if (dreamWords[i].dreamBookId == parseInt(bookId)) {
                    result.push(dreamWords[i]);
                }
            }
            return result;
        }
    };
})

.factory('DreamBooks', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var dreamBooks = [{
        id: 1,
        name: 'Сонник Ванги'
    },
    {
        id: 2,
        name: 'Сонник Миллера'
    }];

    return {
        all: function () {
            return dreamBooks;
        },
        get: function (bookId) {
            for (var i = 0; i < dreamBooks.length; i++) {
                if (dreamBooks[i].id === parseInt(bookId)) {
                    return dreamBooks[i];
                }
            }
            return null;
        }
    };
});


