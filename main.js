// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі

/*
//Async/await

function wakeUp(monday) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (monday) {
                resolve('Get up!');
            }

            reject('Sleep!');
        }, 500)
    })
}

function brushYourTeeth() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Teeth clean');
        }, 2000)
    })
}

function goBreakfast(food) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (food) {
                resolve(`Yum Yum ${food}`);
            }

            reject('No food');
        }, 3000)
    })
}

function toGetDressed(clothing) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (clothing) {
                resolve('Ready');
            }

            reject('I have nothing to wear');
        }, 1000)
    })
}

function goWork() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('I work!');
        }, 4000)
    })
}

function dinner(food) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (food) {
                resolve(`Yum Yum ${food}`);
            }

            reject('No food');
        }, 3000)
    })
}

function workMeeting() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Discussed the tasks');
        }, 2000)
    })
}

function goHome() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Im home!');
        }, 4000)
    })
}

function supper(food) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (food) {
                resolve(`Yum Yum ${food}`);
            }

            reject('No food');
        }, 2000)
    })
}

function watchFilm(film) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (film) {
                resolve(`Nice film ${film}!`);
            }

            reject('No film!');
        }, 4000)
    })
}

function goSleep() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Sleep!');
        }, 5000)
    })
}

async function dayTask() {
    const morning = await wakeUp(true);
    const brush = await brushYourTeeth(morning);
    const goEat = await goBreakfast('oatmeal', brush);
    const dressed = await toGetDressed('suit', goEat);
    const working = await goWork(dressed);
    const goEatDinner = await dinner('soup', working);
    const speak = await workMeeting(goEatDinner);
    const home = await goHome(speak);
    const goEatSupper = await supper('pizza', home);
    const film = await watchFilm('The Witcher', goEatSupper);
    const sleep = await goSleep(film);

    console.log(morning);
    console.log(brush);
    console.log(goEat);
    console.log(dressed);
    console.log(working);
    console.log(goEatDinner);
    console.log(speak);
    console.log(home);
    console.log(goEatSupper);
    console.log(film);
    console.log(sleep);
}

dayTask();*/


//--------------------------------------------------------------------


/*
//Promise

function wakeUp(monday) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (monday) {
                resolve('Get up!');
            }

            reject('Sleep!');
        }, 500)
    })
}

function brushYourTeeth() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Teeth clean');
        }, 2000)
    })
}

function goBreakfast(food) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (food) {
                resolve(`Yum Yum ${food}`);
            }

            reject('No food');
        }, 3000)
    })
}

function toGetDressed(clothing) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (clothing) {
                resolve('Ready');
            }

            reject('I have nothing to wear');
        }, 1000)
    })
}

function goWork() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('I work!');
        }, 4000)
    })
}

function dinner(food) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (food) {
                resolve(`Yum Yum ${food}`);
            }

            reject('No food');
        }, 3000)
    })
}

function workMeeting() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Discussed the tasks');
        }, 2000)
    })
}

function goHome() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Im home!');
        }, 4000)
    })
}

function supper(food) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (food) {
                resolve(`Yum Yum ${food}`);
            }

            reject('No food');
        }, 2000)
    })
}

function watchFilm(film) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (film) {
                resolve(`Nice film ${film}!`);
            }

            reject('No film!');
        }, 4000)
    })
}

function goSleep() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Sleep!');
        }, 5000)
    })
}

wakeUp(true)
    .then(morning => {
        console.log(morning);

        return brushYourTeeth();
    })

    .then(brush => {
        console.log(brush);

        return goBreakfast('oatmeal');
    })

    .then(goEat => {
        console.log(goEat);

        return toGetDressed('suit');
    })

    .then(dressed => {
        console.log(dressed);

        return goWork();
    })

    .then(working => {
        console.log(working);

        return dinner('soup');
    })

    .then(goEatDinner => {
        console.log(goEatDinner);

        return workMeeting();
    })

    .then(speak => {
        console.log(speak);

        return goHome();
    })

    .then(home => {
        console.log(home);

        return supper('pizza');
    })

    .then(goEatSupper => {
        console.log(goEatSupper);

        return watchFilm('The Witcher');
    })

    .then(film => {
        console.log(film);

        return goSleep();
    })

    .then(sleep => {
        console.log(sleep);
    })*/


//----------------------------------------------------------------------------


/*
//Callback

function wakeUp(monday, callback) {
    setTimeout(() => {
        if (monday) {
            return callback(null, 'Get up!');
        }

        callback('Sleep!');
    }, 500)
}

function brushYourTeeth(callback) {
    setTimeout(() => {
        callback(null, 'Teeth clean');
    }, 2000)
}

function goBreakfast(food, callback) {
    setTimeout(() => {
        if (food) {
            return callback(null, `Yum Yum ${food}`);
        }

        callback('No food');
    }, 3000)
}

function toGetDressed(clothing, callback) {
    setTimeout(() => {
        if (clothing) {
            return callback(null, 'Ready');
        }

        callback('I have nothing to wear');
    }, 1000)
}

function goWork(callback) {
    setTimeout(() => {
        callback(null, 'I work!');
    }, 4000)
}

function dinner(food, callback) {
    setTimeout(() => {
        if (food) {
            return callback(null, `Yum Yum ${food}`);
        }

        callback('No food');
    }, 3000)
}

function workMeeting(callback) {
    setTimeout(() => {
        callback(null, 'Discussed the tasks');
    }, 2000)
}

function goHome(callback) {
    setTimeout(() => {
        callback(null, 'Im home!');
    }, 4000)
}

function supper(food, callback) {
    setTimeout(() => {
        if (food) {
            return callback(null, `Yum Yum ${food}`);
        }

        callback('No food');
    }, 2000)
}

function watchFilm(film, callback) {
    setTimeout(() => {
        if (film) {
            return callback(null, `Nice film ${film}!`);
        }

        callback('No film!');
    }, 4000)
}

function goSleep(callback) {
    setTimeout(() => {
        callback(null, 'Sleep!');
    }, 5000)
}


wakeUp(true, (err, morning) => {
    if (err) {
        console.log('Error!', err);
        return;
    }

    console.log(morning);

    brushYourTeeth((err, brush) => {
        if (err) {
            console.log('Error!', err);
            return;
        }

        console.log(brush);

        goBreakfast('oatmeal', (err, goEat) => {
            if (err) {
                console.log('Error!', err);
                return;
            }

            console.log(goEat);


            toGetDressed('suit', (err, dressed) => {
                if (err) {
                    console.log('Error!', err);
                    return;
                }

                console.log(dressed);


                goWork((err, working) => {
                    if (err) {
                        console.log('Error!', err);
                        return;
                    }

                    console.log(working);


                    dinner('soup', (err, goEatDinner) => {
                        if (err) {
                            console.log('Error!', err);
                            return;
                        }

                        console.log(goEatDinner);


                        workMeeting((err, speak) => {
                            if (err) {
                                console.log('Error!', err);
                                return;
                            }

                            console.log(speak);


                            goHome((err, home) => {
                                if (err) {
                                    console.log('Error!', err);
                                    return;
                                }

                                console.log(home);


                                supper('pizza',(err, goEatSupper) => {
                                    if (err) {
                                        console.log('Error!', err);
                                        return;
                                    }

                                    console.log(goEatSupper);


                                    watchFilm('The Witcher', (err, film) => {
                                        if (err) {
                                            console.log('Error!', err);
                                            return;
                                        }

                                        console.log(film);


                                        goSleep((err, sleep) => {
                                            if (err) {
                                                console.log('Error!', err);
                                                return;
                                            }

                                            console.log(sleep);
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})*/