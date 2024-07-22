        // 1. 程式基本元素

        // a. 印出10個你知道的關鍵字

            console.log('var、let、const、function、return、if、else、for、while、class')

        // --------------------------------------------------------------------------------------------------------

        // b. 宣告一圓周率常數，值為3.14，並取一個適當的常數名稱

            const pi = 3.14;
            console.log(pi);
 
        // --------------------------------------------------------------------------------------------------------
        
        // c. 宣告兩個變數: 
        // 1.用來存你的名字
        // 2.用來存你的年紀，並印出。 請使用適當的變數名

            let name = "IanLin";
            let age  = 100;
            console.log(`My name is + ${name}\tI am ${age} years old.`);

        // --------------------------------------------------------------------------------------------------------    

        // 2. 運算子

        // a. 請用程式算出 1 天又 10 小時又 17 分又 36 秒，共等於幾秒

            let day = 1;
            let hours = 10;
            let minutes = 17;
            let second = 36;
            let total = ((day*24+hours)*60+minutes)*60+second;
            console.log(`1 天又 10 小時又 17 分又 36 秒= ${total}秒`);

        // --------------------------------------------------------------------------------------------------------

        // 請用程式算出 93784 秒，是幾天又幾小時又幾分又幾秒

        let Second = 93784;
        let DayTime = 24*60*60;
        let HourTime = 60*60;
        let MinuteTime = 60;
        
        let Day = Math.floor(Second/DayTime)
        let finalSecond = Second%DayTime

        let Hours = Math.floor(finalSecond/HourTime)
        finalSecond = finalSecond%HourTime

        let Minutes = Math.floor(finalSecond/MinuteTime)
        let totalSecond = finalSecond%MinuteTime
        
        console.log(`93784 秒，是 ${Day} 天又 ${Hours} 小時又 ${Minutes} 分又 ${totalSecond} 秒`);

        // --------------------------------------------------------------------------------------------------------

        // 請用變數及運算式表示: 如果有筆電且有網路，就可以在家工作

        let NB = true;
        let NET = true;
        if(NB && NET){
            console.log("恭喜您! 在家繼續奴! ")
        }
        else console.log("QQ 爽賺一天!")

        // --------------------------------------------------------------------------------------------------------
        
        // Reds 在寫 JavaScript 作業，電腦開機需要 1 分鐘，打開 VS Code 需要 2 分鐘
        // ，寫 1 題作業需要 3 分鐘，且 Reds 每天都會將電腦關機。Reds 分 2 天寫，第一
        // 天連續寫 3 題目，第二天連續寫 2 題，請用程式算出 Reds 共花多少時間?

        let computerOpen = 1;
        let vscodeOpen = 2;
        let doingHw = 3;
        let close = 0;
        let dayOne = computerOpen+vscodeOpen+(doingHw*3);
        let dayTwo = computerOpen+vscodeOpen+(doingHw*2);
        console.log(`Reds 共花 ${dayOne+dayTwo}分鐘`);

        // --------------------------------------------------------------------------------------------------------

        // 請設計一程式，含有 1 個正整數變數 n，可隨機印出一個介於 1~n 的整數
        //     #### 提示1: 產生 (偽) 亂數
        //     // 以下程式，會回傳介於 0~1 (可能為 0，但不可能為 1) 的數
        //     Math.random();

        //     #### 提示2: 轉換成整數
        //     // 以下程式，會將value轉成整數並回傳
        //     Math.trunc(value);
        
        let n = 9999;
        console.log(Math.trunc(Math.random()*n)+1);

        // --------------------------------------------------------------------------------------------------------

        // 3. 流程控制

        // 有1個正整數n，並印出1~n之內，3的倍數和4的倍數的總和

        let num = Math.floor(Math.random()* 1000)+1;
        let sum = 0;

        for(let i = 3 ; i <= num ; i+=3){
            sum+=i;
        }
        for(let k = 4 ; k<=num ; k+=4){
            if( k%3 != 0){
                sum+=k
            }
        }            
        console.log(`正整數${num}的3,4倍數和是${sum}`);

        // --------------------------------------------------------------------------------------------------------

        // 請用迴圈印出以下內容..
        // 2 5 8 11 14 17 20 23 26 29 32

        for(let i = 2; i<33; i+=3){
            console.log(i);
        }
        
        // --------------------------------------------------------------------------------------------------------

        // 請用迴圈印出以下內容
        // 18 27 36 45 54 63 72 81
        // 16 24 32 40 48 56 64
        // 14 21 28 35 42 49
        // 12 18 24 30 36
        // 10 15 20 25
        // 8 12 16
        // 6  9
        // 4
        
        for( let i = 9 ; i>=2 ; i--){
            let blank=" "
            for( let k = 2 ; k<=i ; k++){
                blank += (i*k)+" "
            }
            console.log(blank)
        }

        // --------------------------------------------------------------------------------------------------------

        // 請設計一程式，含有1個正整數變數n，並印出1~n所有質數的總和
                            
        let numm = Math.floor(Math.random()*100)+1
        let prime = 0
        
        function primeNum(a){
            if(a<2){
                return false
            }

            for(let i = 2; i<a ; i++){
                if(a%i==0){
                    return false
                }
            }
            return true
        }

        for(let k = 2 ; k<=numm ; k++){
            if(primeNum(k)){
                prime+=k
            }
        }

        console.log(`變數${numm}的質數總和是${prime}`)

        // --------------------------------------------------------------------------------------------------------

        // 請設計一程式，含有2個正整數變數year(年)、month(月)，印出該年該月有幾天
        // *註: 需考慮閏年

        let year  = Math.floor(Math.random()*10000)+1
        let month  = Math.floor(Math.random()*12)+1

        function isLeapYear(year){
            if(year%4==0){
                if(year%100==0){
                    if(year%400==0){
                        return true
                    }
                    else{
                        return false
                    }
                }
                else{
                    return true
                }
            }
            else{
                return false
            }
        }

        function howManyDays(year, month){         
            let dat = 0
            if(month==2){
                if(isLeapYear(year)){
                dat = 29
                console.log(`${year}是閏年, ${month}月有${dat}天`)
                }
                else {
                    dat = 28
                    console.log(`${year}是平年, ${month}月有${dat}天`)
                }              
            } 
            else if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month== 12){
                if(isLeapYear(year)){
                    console.log(`${year}是閏年, ${month}月有31天`)
                }
                else{                   
                    console.log(`${year}是平年, ${month}月有31天`)
                }
            }
            else{
                if(isLeapYear(year)){
                    console.log(`${year}是閏年, ${month}月有30天`)
                }
                else{                   
                    console.log(`${year}是平年, ${month}月有30天`)
                }
            }
        }
        console.log(howManyDays(year, month))
            
        // --------------------------------------------------------------------------------------------------------

        // 4.  陣列

        // 請宣告一個陣列，並利用Math.random()產生5個範圍為0~9的整數值給每個元素，且每個值不可重複
        
        let arr = [];
        function intRandom(arr){
            while(arr.length<5){
                let random = Math.floor(Math.random()*10);
                if(!arr.includes(random)){
                    arr.push(random);
                }
            }
            return arr
        }
        console.log(intRandom(arr));
        console.log(arr);

        // (續上題) 請印出陣列所有元素的總和、平均值

        let Total = 0;
        let average = 0;
        for(let i = 0 ; i<arr.length; i++){
            Total+=arr[i];
        }
        average = Total/arr.length;
        console.log(`數組為${arr}, 總和為${Total},  平均值為${average}`)

        // (續上題) 請將陣列排序，若有陣列元素之值等於平均值，印出該元素的索引
        // 否則，找出平均值介於哪兩個元素值之間，印出該兩個元素的索引
        
        console.log(arr.sort());
        for(let i = 0; i<arr.length; i++){
            if(arr[i]===average){
                console.log(`平均值為${average}, 相同的索引為arr[${i}]`);
                break
            }
            else if (arr[i] < average && average < arr[i+1]) {
                console.log(`平均值${average}, 介於索引arr[${i}]跟arr[${i+1}]之間`)
                break
            }
        }
        
        // --------------------------------------------------------------------------------------------------------

        // const mySkills = ['javascript', 'java', 'sql', 'c', 'python', 'php', 'swift'];
        // 請統計並印出陣列內每個字母各有幾個，EX:
        // a: 4
        // c: 2
        
        const mySkills = ['javascript', 'java', 'sql', 'c', 'python', 'php', 'swift'];
        let first = mySkills.map(e =>e.length)
        console.log(first)

        // --------------------------------------------------------------------------------------------------------

        // 請宣告一個二維陣列，並用巢狀for迴圈將值放入陣列內。結果如下:
        // [
        //     [ 18, 27, 36, 45, 54, 63, 72, 81 ],
        //     [ 16, 24, 32, 40, 48, 56, 64 ],
        //     [ 14, 21, 28, 35, 42, 49 ],
        //     [ 12, 18, 24, 30, 36 ],
        //     [ 10, 15, 20, 25 ],
        //     [ 8, 12, 16 ],
        //     [ 6, 9 ],
        //     [ 4 ]
        // ]

        let twoArray = []
        for(let i = 9 ; i>=2 ; i--){
            let white = [] 
            for(let k = 2 ; k<=i ; k++){
                white.push(i*k)
            }
            twoArray.push(white)
        }

        console.log(twoArray)

        // --------------------------------------------------------------------------------------------------------

