

$(function () {
    // jqueryで値を取ってくる関数はval()
    // console.log('hello world');

    // 北海道
    $('.hokkaido').on('click', function () {
        let snack = $('input').val();
        let parameter = {
            type: snack,
            apikey: "guest",
            format: "jsonp",
            // list:"area"
            max: "10",
            keyword: "北海道"


        }
        // Ajaxの書き方

        $.ajax({
            url: 'https://sysbird.jp/toriko/api/', //アクセスするURL
            type: 'get', //post or get
            cache: false,        //cacheを使うか使わないかを設定
            dataType: 'jsonp',     //data type script・xmlDocument・jsonなど
            data: parameter,           //アクセスするときに必要なデータを記載      
        })
            .done(function (response) {
                //通信成功時の処理
                console.log(response);
                console.log(response.item[0].image);
                console.log(response.item[0].name);
                console.log(response.item[0].price);


                for (temple of response.item) {
                    console.log(temple);
                    let template = `<div class="result-01">
                    <img src="${temple.image}" alt="">
                    <h2>${temple.name}</h2>
                    <p>${temple.price}</p>
                </div>`;
                    $(".city").append(template);
                }

                // 結果をスクロールさせて表示
                var windowHeight = $(window).height();
                console.log(windowHeight);

                // 時差の処理（２秒で表示させる）
                setTimeout(function () {
                    $(window).scrollTop(windowHeight);
                }, 2000);


                //成功したとき実行したいスクリプトを記載
            })
            .fail(function (xhr) {
                //通信失敗時の処理
                //失敗したときに実行したいスクリプトを記載
            })
            .always(function (xhr, msg) {
                //通信完了時の処理
                //結果に関わらず実行したいスクリプトを記載
            });
    })

    // 東北
    $('.tohoku').on('click', function () {
        let snack = $('input').val();
        let parameter = {
            type: snack,
            apikey: "guest",
            format: "jsonp",
            // list:"area"
            max: "10",
            keyword: "東北"


        }
        // Ajaxの書き方

        $.ajax({
            url: 'https://sysbird.jp/toriko/api/', //アクセスするURL
            type: 'get', //post or get
            cache: false,        //cacheを使うか使わないかを設定
            dataType: 'jsonp',     //data type script・xmlDocument・jsonなど
            data: parameter,           //アクセスするときに必要なデータを記載      
        })
            .done(function (response) {
                //通信成功時の処理
                console.log(response);
                console.log(response.item[0].image);
                console.log(response.item[0].name);
                console.log(response.item[0].price);


                for (temple of response.item) {
                    console.log(temple);
                    let template = `<div class="result-01">
                    <img src="${temple.image}" alt="">
                    <h2>${temple.name}</h2>
                    <p>${temple.price}</p>
                </div>`;
                    $(".city").append(template);
                }

                // 結果をスクロールさせて表示
                var windowHeight = $(window).height();
                console.log(windowHeight);

                // 時差の処理（２秒で表示させる）
                setTimeout(function () {
                    $(window).scrollTop(windowHeight);
                }, 2000);


                //成功したとき実行したいスクリプトを記載
            })
            .fail(function (xhr) {
                //通信失敗時の処理
                //失敗したときに実行したいスクリプトを記載
            })
            .always(function (xhr, msg) {
                //通信完了時の処理
                //結果に関わらず実行したいスクリプトを記載
            });
    })

    // 関東
    $('.kanto').on('click', function () {
        let snack = $('input').val();
        let parameter = {
            type: snack,
            apikey: "guest",
            format: "jsonp",
            // list:"area"
            max: "10",
            keyword: "関東"


        }
        // Ajaxの書き方

        $.ajax({
            url: 'https://sysbird.jp/toriko/api/', //アクセスするURL
            type: 'get', //post or get
            cache: false,        //cacheを使うか使わないかを設定
            dataType: 'jsonp',     //data type script・xmlDocument・jsonなど
            data: parameter,           //アクセスするときに必要なデータを記載      
        })
            .done(function (response) {
                //通信成功時の処理
                console.log(response);
                console.log(response.item[0].image);
                console.log(response.item[0].name);
                console.log(response.item[0].price);


                for (temple of response.item) {
                    console.log(temple);
                    let template = `<div class="result-01">
                    <img src="${temple.image}" alt="">
                    <h2>${temple.name}</h2>
                    <p>${temple.price}</p>
                </div>`;
                    $(".city").append(template);
                }

                                
                // 結果をスクロールさせて表示
                var windowHeight = $(window).height();
                console.log(windowHeight);

                // 時差の処理（２秒で表示させる）
                setTimeout(function () {
                    $(window).scrollTop(windowHeight);
                }, 2000);


                //成功したとき実行したいスクリプトを記載
            })
            .fail(function (xhr) {
                //通信失敗時の処理
                //失敗したときに実行したいスクリプトを記載
            })
            .always(function (xhr, msg) {
                //通信完了時の処理
                //結果に関わらず実行したいスクリプトを記載
            });
    })

    // 北陸
    $('.hokuriku').on('click', function () {
        let snack = $('input').val();
        let parameter = {
            type: snack,
            apikey: "guest",
            format: "jsonp",
            // list:"area"
            max: "10",
            keyword: "北陸"


        }
        // Ajaxの書き方

        $.ajax({
            url: 'https://sysbird.jp/toriko/api/', //アクセスするURL
            type: 'get', //post or get
            cache: false,        //cacheを使うか使わないかを設定
            dataType: 'jsonp',     //data type script・xmlDocument・jsonなど
            data: parameter,           //アクセスするときに必要なデータを記載      
        })
            .done(function (response) {
                //通信成功時の処理
                console.log(response);
                console.log(response.item[0].image);
                console.log(response.item[0].name);
                console.log(response.item[0].price);


                for (temple of response.item) {
                    console.log(temple);
                    let template = `<div class="result-01">
                    <img src="${temple.image}" alt="">
                    <h2>${temple.name}</h2>
                    <p>${temple.price}</p>
                </div>`;
                    $(".city").append(template);
                }

                                
                // 結果をスクロールさせて表示
                var windowHeight = $(window).height();
                console.log(windowHeight);

                // 時差の処理（２秒で表示させる）
                setTimeout(function () {
                    $(window).scrollTop(windowHeight);
                }, 2000);


                //成功したとき実行したいスクリプトを記載
            })
            .fail(function (xhr) {
                //通信失敗時の処理
                //失敗したときに実行したいスクリプトを記載
            })
            .always(function (xhr, msg) {
                //通信完了時の処理
                //結果に関わらず実行したいスクリプトを記載
            });
    })

    // 東海
    $('.tokai').on('click', function () {
        let snack = $('input').val();
        let parameter = {
            type: snack,
            apikey: "guest",
            format: "jsonp",
            // list:"area"
            max: "10",
            keyword: "東海"


        }
        // Ajaxの書き方

        $.ajax({
            url: 'https://sysbird.jp/toriko/api/', //アクセスするURL
            type: 'get', //post or get
            cache: false,        //cacheを使うか使わないかを設定
            dataType: 'jsonp',     //data type script・xmlDocument・jsonなど
            data: parameter,           //アクセスするときに必要なデータを記載      
        })
            .done(function (response) {
                //通信成功時の処理
                console.log(response);
                console.log(response.item[0].image);
                console.log(response.item[0].name);
                console.log(response.item[0].price);


                for (temple of response.item) {
                    console.log(temple);
                    let template = `<div class="result-01">
                    <img src="${temple.image}" alt="">
                    <h2>${temple.name}</h2>
                    <p>${temple.price}</p>
                </div>`;
                    $(".city").append(template);
                }

                                
                // 結果をスクロールさせて表示
                var windowHeight = $(window).height();
                console.log(windowHeight);

                // 時差の処理（２秒で表示させる）
                setTimeout(function () {
                    $(window).scrollTop(windowHeight);
                }, 2000);


                //成功したとき実行したいスクリプトを記載
            })
            .fail(function (xhr) {
                //通信失敗時の処理
                //失敗したときに実行したいスクリプトを記載
            })
            .always(function (xhr, msg) {
                //通信完了時の処理
                //結果に関わらず実行したいスクリプトを記載
            });
    })

    // 関西
    $('.kansai').on('click', function () {
        let snack = $('input').val();
        let parameter = {
            type: snack,
            apikey: "guest",
            format: "jsonp",
            // list:"area"
            max: "10",
            keyword: "関西"


        }
        // Ajaxの書き方

        $.ajax({
            url: 'https://sysbird.jp/toriko/api/', //アクセスするURL
            type: 'get', //post or get
            cache: false,        //cacheを使うか使わないかを設定
            dataType: 'jsonp',     //data type script・xmlDocument・jsonなど
            data: parameter,           //アクセスするときに必要なデータを記載      
        })
            .done(function (response) {
                //通信成功時の処理
                console.log(response);
                console.log(response.item[0].image);
                console.log(response.item[0].name);
                console.log(response.item[0].price);


                for (temple of response.item) {
                    console.log(temple);
                    let template = `<div class="result-01">
                    <img src="${temple.image}" alt="">
                    <h2>${temple.name}</h2>
                    <p>${temple.price}</p>
                </div>`;
                    $(".city").append(template);
                }

                                
                // 結果をスクロールさせて表示
                var windowHeight = $(window).height();
                console.log(windowHeight);

                // 時差の処理（２秒で表示させる）
                setTimeout(function () {
                    $(window).scrollTop(windowHeight);
                }, 2000);


                //成功したとき実行したいスクリプトを記載
            })
            .fail(function (xhr) {
                //通信失敗時の処理
                //失敗したときに実行したいスクリプトを記載
            })
            .always(function (xhr, msg) {
                //通信完了時の処理
                //結果に関わらず実行したいスクリプトを記載
            });
    })

    // 四国
    $('.shikoku').on('click', function () {
        let snack = $('input').val();
        let parameter = {
            type: snack,
            apikey: "guest",
            format: "jsonp",
            // list:"area"
            max: "10",
            keyword: "四国"


        }
        // Ajaxの書き方

        $.ajax({
            url: 'https://sysbird.jp/toriko/api/', //アクセスするURL
            type: 'get', //post or get
            cache: false,        //cacheを使うか使わないかを設定
            dataType: 'jsonp',     //data type script・xmlDocument・jsonなど
            data: parameter,           //アクセスするときに必要なデータを記載      
        })
            .done(function (response) {
                //通信成功時の処理
                console.log(response);
                console.log(response.item[0].image);
                console.log(response.item[0].name);
                console.log(response.item[0].price);


                for (temple of response.item) {
                    console.log(temple);
                    let template = `<div class="result-01">
                    <img src="${temple.image}" alt="">
                    <h2>${temple.name}</h2>
                    <p>${temple.price}</p>
                </div>`;
                    $(".city").append(template);
                }

                                
                // 結果をスクロールさせて表示
                var windowHeight = $(window).height();
                console.log(windowHeight);

                // 時差の処理（２秒で表示させる）
                setTimeout(function () {
                    $(window).scrollTop(windowHeight);
                }, 2000);


                //成功したとき実行したいスクリプトを記載
            })
            .fail(function (xhr) {
                //通信失敗時の処理
                //失敗したときに実行したいスクリプトを記載
            })
            .always(function (xhr, msg) {
                //通信完了時の処理
                //結果に関わらず実行したいスクリプトを記載
            });
    })

    // 九州
    $('.kyushu').on('click', function () {
        let snack = $('input').val();
        let parameter = {
            type: snack,
            apikey: "guest",
            format: "jsonp",
            // list:"area"
            max: "10",
            keyword: "九州"


        }
        // Ajaxの書き方

        $.ajax({
            url: 'https://sysbird.jp/toriko/api/', //アクセスするURL
            type: 'get', //post or get
            cache: false,        //cacheを使うか使わないかを設定
            dataType: 'jsonp',     //data type script・xmlDocument・jsonなど
            data: parameter,           //アクセスするときに必要なデータを記載      
        })
            .done(function (response) {
                //通信成功時の処理
                console.log(response);
                console.log(response.item[0].image);
                console.log(response.item[0].name);
                console.log(response.item[0].price);


                for (temple of response.item) {
                    console.log(temple);
                    let template = `<div class="result-01">
                    <img src="${temple.image}" alt="">
                    <h2>${temple.name}</h2>
                    <p>${temple.price}</p>
                </div>`;
                    $(".city").append(template);
                }

                                
                // 結果をスクロールさせて表示
                var windowHeight = $(window).height();
                console.log(windowHeight);

                // 時差の処理（２秒で表示させる）
                setTimeout(function () {
                    $(window).scrollTop(windowHeight);
                }, 2000);


                //成功したとき実行したいスクリプトを記載
            })
            .fail(function (xhr) {
                //通信失敗時の処理
                //失敗したときに実行したいスクリプトを記載
            })
            .always(function (xhr, msg) {
                //通信完了時の処理
                //結果に関わらず実行したいスクリプトを記載
            });
    })

    // 沖縄
    $('.okinawa').on('click', function () {
        let snack = $('input').val();
        let parameter = {
            type: snack,
            apikey: "guest",
            format: "jsonp",
            // list:"area"
            max: "10",
            keyword: "沖縄"


        }
        // Ajaxの書き方

        $.ajax({
            url: 'https://sysbird.jp/toriko/api/', //アクセスするURL
            type: 'get', //post or get
            cache: false,        //cacheを使うか使わないかを設定
            dataType: 'jsonp',     //data type script・xmlDocument・jsonなど
            data: parameter,           //アクセスするときに必要なデータを記載      
        })
            .done(function (response) {
                //通信成功時の処理
                console.log(response);
                console.log(response.item[0].image);
                console.log(response.item[0].name);
                console.log(response.item[0].price);


                for (temple of response.item) {
                    console.log(temple);
                    let template = `<div class="result-01">
                    <img src="${temple.image}" alt="">
                    <h2>${temple.name}</h2>
                    <p>${temple.price}</p>
                </div>`;
                    $(".city").append(template);
                }

                                
                // 結果をスクロールさせて表示
                var windowHeight = $(window).height();
                console.log(windowHeight);

                // 時差の処理（２秒で表示させる）
                setTimeout(function () {
                    $(window).scrollTop(windowHeight);
                }, 2000);



                
                //成功したとき実行したいスクリプトを記載
            })
            .fail(function (xhr) {
                //通信失敗時の処理
                //失敗したときに実行したいスクリプトを記載
            })
            .always(function (xhr, msg) {
                //通信完了時の処理
                //結果に関わらず実行したいスクリプトを記載
            });
    })





}) //ここが最後

