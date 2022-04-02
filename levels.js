function loadLevel(level = pData.level) {

    pData.level = level;
    init();
    data.runner.inmenu = 0;

    // summonElement("runner", objects.field, 0, 0);
    // objects.runner = document.getElementsByClassName("runner")[0];

    objects.gameframe.classList.add("loadframe");

    if (pData.runner.developer == 1) {
        summonElement("oldotherposition",0,0);
        objects.oldotherposition = document.getElementsByClassName("oldotherposition")[0];
    }


    if (level == 1) { //Level 1
        summonElement("runner", objects.field, 11, 9);
        soundtrack("start",songs["pokemon"]);

        data.runner.position.top = 10;
        data.runner.position.left = 11;
        data.walls.push("black,15,0");
        data.walls.push("type1-1,0,0");
        data.walls.push("type1-3,17,0");
        data.walls.push("type1-5,17,11");
        data.walls.push("type1-7,0,11");

        for (data.temp.iOfLG = 1; data.temp.iOfLG < 17; data.temp.iOfLG++) {
            data.walls.push("type1-2," + data.temp.iOfLG + ",0");
        }

        for (data.temp.iOfLG = 1; data.temp.iOfLG < 17; data.temp.iOfLG++) {
            if (data.temp.iOfLG != 11) {
                data.walls.push("type1-6," + data.temp.iOfLG + ",11");
            }
        }

        for (data.temp.iOfLG = 1; data.temp.iOfLG < 11; data.temp.iOfLG++) {
            data.walls.push("type1-8,0," + data.temp.iOfLG);
        }

        for (data.temp.iOfLG = 1; data.temp.iOfLG < 11; data.temp.iOfLG++) {
            data.walls.push("type1-4,17," + data.temp.iOfLG);
        }

        for (data.temp.iOfLG = 1; data.temp.iOfLG < 8; data.temp.iOfLG++) {
            summonElement("floor1-1", "", 1, data.temp.iOfLG);
            summonElement("floor1-1", "", 2, data.temp.iOfLG);
            summonElement("floor1-1", "", 3, data.temp.iOfLG);
            summonElement("floor1-1", "", 4, data.temp.iOfLG);
            summonElement("floor1-1", "", 5, data.temp.iOfLG);
            summonElement("floor1-1", "", 6, data.temp.iOfLG);
        }

        for (data.temp.iOfLG = 7; data.temp.iOfLG < 17; data.temp.iOfLG++) {
            summonElement("floor1-2", "", data.temp.iOfLG, 1);
            summonElement("floor1-2", "", data.temp.iOfLG, 2);
            summonElement("floor1-2", "", data.temp.iOfLG, 3);
            summonElement("floor1-2", "", data.temp.iOfLG, 4);
            summonElement("floor1-2", "", data.temp.iOfLG, 5);
            summonElement("floor1-2", "", data.temp.iOfLG, 6);
            summonElement("floor1-2", "", data.temp.iOfLG, 7);

        }


        for (data.temp.iOfLG = 1; data.temp.iOfLG < 17; data.temp.iOfLG++) {

            summonElement("floor1-2", "", data.temp.iOfLG, 8);
            summonElement("floor1-2", "", data.temp.iOfLG, 9);
            summonElement("floor1-2", "", data.temp.iOfLG, 10);
        }


        data.walls.push("inner1-1,1,2");
        data.walls.push("inner1-2,1,3");


        data.walls.push("inner1-1,3,2");
        data.walls.push("inner1-2,3,3");

        summonElement("npc1", "", 16, 5);
        summonElement("trigger", objects.field, 16, 5, "interactWith(0010)");











        data.field.height = 12;
        data.field.width = 18;
        objects.field.style.backgroundColor = "#884411";

        summonElement("trigger", objects.field, 11, 11, "loadLevel(002-1)");




    } else if (level.indexOf("002-") >= 0) { //Level 2
        if (level.split("002-")[1] == "1") {
            summonElement("runner", objects.field, 3, 7);
            data.runner.position.left = 57;
            data.runner.position.top = 22;

        } else if (level.split("002-")[1] == "3") {
            summonElement("runner", objects.field, 64, 22);
            data.runner.position.left = 64;
            data.runner.position.top = 22;

        } else {
            summonElement("runner", objects.field, 1, 1);

        }


        summonElement("trigger", objects.field, 55, 21, "loadLevel(3)");

        summonElement("trigger", objects.field, 59, 21, "loadLevel(008)");



        data.walls.push("house1-1,56,19");
        data.walls.push("house1-2,57,19");
        data.walls.push("house1-3,58,19");

        data.walls.push("house1-4,56,20");
        data.walls.push("house1-5,57,20");
        data.walls.push("house1-6,58,20");


        data.walls.push("house1-7,56,21");
        summonElement("house1-8", "", 57, 21);
        summonElement("trigger", "", 57, 21, "loadLevel(1)");

        data.walls.push("house1-9,58,21");


        if (pData.runner.developer == 1) {
            data.enemys.push("spikes,53,21");
            data.enemys.push("hole,73,31");
        }





        for (data.temp.iOfLG = 54; data.temp.iOfLG <= 71; data.temp.iOfLG++) {
            data.walls.push("fence1," + data.temp.iOfLG + ",17");
            data.walls.push("fence1," + data.temp.iOfLG + ",25");

            if (data.temp.iOfLG >= 57) {
                summonElement("path1", "", data.temp.iOfLG, 23);
            }



        }

        summonElement("path1", "", 72, 23);
        summonElement("path1", "", 73, 23);
        summonElement("path1", "", 73, 24);
        summonElement("path1", "", 73, 25);
        summonElement("path1", "", 73, 26);
        summonElement("path1", "", 73, 27);


        summonElement("path1", "", 74, 27);
        summonElement("path1", "", 75, 27);
        summonElement("path1", "", 75, 28);
        summonElement("path1", "", 76, 28);

        summonElement("path1", "", 73, 28);
        summonElement("path1", "", 72, 28);
        summonElement("path1", "", 72, 29);
        summonElement("path1", "", 71, 29);
        summonElement("path1", "", 71, 30);
        summonElement("path1", "", 70, 30);
        summonElement("path1", "", 69, 30);

        summonElement("path1", "", 69, 31);






        summonElement("path1", "", 57, 22);
        summonElement("path1", "", 64, 22);




        data.walls.push("fence1,60,18");
        data.walls.push("fence1,60,19");
        data.walls.push("fence1,60,20");
        data.walls.push("fence1,60,21");

        data.walls.push("fence1,54,18");
        data.walls.push("fence1,54,19");
        data.walls.push("fence1,54,20");
        data.walls.push("fence1,54,21");
        data.walls.push("fence1,54,22");
        data.walls.push("fence1,54,23");
        data.walls.push("fence1,54,24");


        data.walls.push("fence1,71,18");
        data.walls.push("fence1,71,19");
        data.walls.push("fence1,71,20");
        data.walls.push("fence1,71,21");


        data.walls.push("fence1,72,21");
        data.walls.push("fence1,73,21");
        data.walls.push("fence1,74,21");
        data.walls.push("fence1,75,21");

        data.walls.push("fence1,75,22");
        data.walls.push("fence1,75,23");
        data.walls.push("fence1,75,24");
        data.walls.push("fence1,75,25");







        data.walls.push("house2-1,62,19");
        data.walls.push("house2-2,63,19");
        data.walls.push("house2-2,64,19");
        data.walls.push("house2-2,65,19");
        data.walls.push("house2-3,66,19");
        data.walls.push("house2-2,67,19");
        data.walls.push("house2-2,68,19");
        data.walls.push("house2-4,69,19");

        data.walls.push("house2-5,62,20");
        data.walls.push("house2-6,63,20");
        data.walls.push("house2-6,64,20");
        data.walls.push("house2-6,65,20");
        data.walls.push("house2-6,66,20");
        data.walls.push("house2-7,67,20");
        data.walls.push("house2-6,68,20");
        data.walls.push("house2-8,69,20");

        data.walls.push("house2-9,62,21");
        data.walls.push("house2-10,63,21");
        summonElement("house2-11", "", 64, 21);
        summonElement("trigger", objects.field, 64, 21, "loadLevel(005)");


        data.walls.push("house2-10,65,21");
        data.walls.push("house2-13,66,21");
        data.walls.push("house2-10,67,21");
        data.walls.push("house2-10,68,21");
        data.walls.push("house2-12,69,21");



        data.walls.push("type2-1,37,33");
        data.walls.push("type2-11,37,34");

        for (data.temp.iOfLG = 36; data.temp.iOfLG >= 32; data.temp.iOfLG--) {
            data.walls.push("type2-2," + data.temp.iOfLG + ",34");
        }


        for (data.temp.iOfLG = 38; data.temp.iOfLG <= 56; data.temp.iOfLG++) {
            data.walls.push("type2-2," + data.temp.iOfLG + ",33");
            if (data.temp.iOfLG != 38 && data.temp.iOfLG != 56) {
                summonElement("type2-18", "", data.temp.iOfLG, 34);
                summonElement("type2-18", "", data.temp.iOfLG, 35);
                summonElement("type2-18", "", data.temp.iOfLG, 36);
                summonElement("type2-18", "", data.temp.iOfLG, 37);
                summonElement("type2-18", "", data.temp.iOfLG, 38);
                summonElement("type2-18", "", data.temp.iOfLG, 39);

            }

        }


        data.walls.push("type2-3,57,33");
        data.walls.push("type2-12,57,34");

        data.walls.push("type2-3,66,34");
        data.walls.push("type2-12,66,35");
        data.walls.push("type2-2,67,35");
        data.walls.push("type2-14,68,35");

        data.walls.push("type2-15,69,35");
        summonElement("type2-18", "", 69, 36);

        data.walls.push("type2-15,69,36");


        data.walls.push("type2-16,70,35");

        data.walls.push("type2-23,66,36");
        data.walls.push("type2-18,67,36");
        data.walls.push("type2-18,68,36");
        data.walls.push("type2-18,70,36");
        data.walls.push("type2-18,72,36");
        data.walls.push("type2-24,73,36");


        summonElement("stairs2-1", "", 71, 35);
        summonElement("stairs2-1", "", 71, 36);

        data.walls.push("type2-2,72,35");
        data.walls.push("type2-11,73,35");
        data.walls.push("type2-1,73,34");
        data.walls.push("type2-2,74,34");
        data.walls.push("type2-17,75,34");




        summonElement("type2-19", "", 50, 35);
        summonElement("type2-20", "", 51, 35);

        if (pData.runner.developer == 1) {
            summonElement("trigger", "", 40, 34, "loadLevel(006)");
            summonElement("trigger", "", 42, 34, "loadLevel(007)");

        }



        for (data.temp.iOfLG = 58; data.temp.iOfLG <= 65; data.temp.iOfLG++) {
            data.walls.push("type2-2," + data.temp.iOfLG + ",34");
        }





        summonElement("type2-21", "", 38, 34);
        summonElement("type2-21", "", 38, 35);
        summonElement("type2-21", "", 38, 36);
        summonElement("type2-21", "", 38, 37);

        summonElement("type2-22", "", 37, 35);
        summonElement("type2-22", "", 37, 36);
        summonElement("type2-22", "", 37, 37);



        summonElement("type2-22", "", 56, 34);
        summonElement("type2-22", "", 56, 35);
        summonElement("type2-22", "", 56, 36);
        summonElement("type2-22", "", 56, 37);








        data.field.height = 100;
        data.field.width = 100;

        objects.field.style.background = "#FFFF8B";




    } else if (level == 3) { //Developer Test - Level 3
        summonElement("trigger", objects.field, 0, 0, "loadLevel(002-1)");


        summonElement("runner", objects.field, 1, 1);
        data.runner.position.top = 1;
        data.runner.position.left = 1;
        data.field.height = 50;
        data.field.width = 50;
        objects.field.style.background = "pink";

        summonElement("wall1", "", 0, 0);
        summonElement("path1", "", 1, 0);

        summonElement("grass1", "", 4, 0);
        summonElement("grass2", "", 5, 0);
        summonElement("grass3", "", 6, 0);
        summonElement("grass4", "", 6, 1);
        summonElement("grass5", "", 6, 2);
        summonElement("grass6", "", 5, 2);
        summonElement("grass7", "", 4, 2);
        summonElement("grass8", "", 4, 1);
        summonElement("grass9", "", 5, 1);

        summonElement("house1-1", "", 0, 2);
        summonElement("house1-2", "", 1, 2);
        summonElement("house1-3", "", 2, 2);
        summonElement("house1-4", "", 0, 3);
        summonElement("house1-5", "", 1, 3);
        summonElement("house1-6", "", 2, 3);
        summonElement("house1-7", "", 0, 4);
        summonElement("house1-8", "", 1, 4);
        summonElement("house1-9", "", 2, 4);

        summonElement("house2-1", "", 0, 5);
        summonElement("house2-2", "", 1, 5);
        summonElement("house2-3", "", 2, 5);
        summonElement("house2-4", "", 3, 5);
        summonElement("house2-5", "", 0, 6);
        summonElement("house2-6", "", 1, 6);
        summonElement("house2-7", "", 2, 6);
        summonElement("house2-8", "", 3, 6);
        summonElement("house2-9", "", 0, 7);
        summonElement("house2-10", "", 1, 7);
        summonElement("house2-11", "", 2, 7);
        summonElement("house2-12", "", 3, 7);

        summonElement("type2-1", "", 6, 3);
        summonElement("type2-2", "", 7, 3);
        summonElement("type2-3", "", 8, 3);
        summonElement("type2-4", "", 8, 4);
        summonElement("type2-5", "", 8, 5);
        summonElement("type2-6", "", 7, 5);
        summonElement("type2-7", "", 6, 5);
        summonElement("type2-8", "", 6, 4);

        summonElement("type2-9", "", 9, 4);
        summonElement("type2-10", "", 10, 4);
        summonElement("type2-11", "", 10, 5);
        summonElement("type2-12", "", 9, 5);

        summonElement("type2-13", "", 9, 3);
        summonElement("type2-14", "", 10, 3);
        summonElement("type2-15", "", 11, 3);
        summonElement("type2-16", "", 12, 3);
        summonElement("type2-17", "", 13, 3);

        summonElement("type2-18", "", 11, 4);
        summonElement("type2-19", "", 7, 6);
        summonElement("type2-20", "", 8, 6);

        summonElement("type2-21", "", 9, 6);
        summonElement("type2-22", "", 10, 6);
        summonElement("type2-23", "", 9, 7);
        summonElement("type2-24", "", 10, 7);



        summonElement("inner1-1", "", 4, 5);
        summonElement("inner1-2", "", 4, 6);

        summonElement("inner1-3", "", 4, 7);
        summonElement("inner1-4", "", 5, 7);

        summonElement("floor1-1", "", 5, 6);
        summonElement("floor1-2", "", 5, 9);


        summonElement("type1-1", "", 4, 8);
        summonElement("type1-2", "", 5, 8);
        summonElement("type1-3", "", 6, 8);

        summonElement("type1-4", "", 6, 9);
        summonElement("type1-5", "", 6, 10);
        summonElement("type1-6", "", 5, 10);
        summonElement("type1-7", "", 4, 10);
        summonElement("type1-8", "", 4, 9);



        summonElement("type3-1", "", 21, 0);
        summonElement("type3-2", "", 22, 0);
        summonElement("type3-3", "", 23, 0);
        summonElement("type3-4", "", 23, 1);
        summonElement("type3-5", "", 23, 2);
        summonElement("type3-6", "", 22, 2);
        summonElement("type3-7", "", 21, 2);
        summonElement("type3-8", "", 21, 1);

        summonElement("type3-9", "", 24, 0);
        summonElement("type3-10", "", 25, 0);
        summonElement("type3-11", "", 25, 1);
        summonElement("type3-12", "", 24, 1);

        summonElement("button1-1", "", 26, 0);
        summonElement("button1-2", "", 26, 1);

        summonElement("floor3-1", "", 29, 0);
        summonElement("floor3-2", "", 29, 1);
        summonElement("floor3-3", "", 29, 2);
        summonElement("floor3-4", "", 29, 3);

        summonElement("floor3-6", "", 29, 4);
        summonElement("floor3-7", "", 29, 5);
        summonElement("floor3-8", "", 29, 6);
        summonElement("floor3-9", "", 29, 7);


        summonElement("lamp1-1", "", 27, 0);
        summonElement("fire1-1", "", 28, 0);

        summonElement("door2-4", "", 22, 3);
        summonElement("door2-1", "", 22, 4);
        summonElement("door2-2", "", 21, 4);
        summonElement("door2-3", "", 21, 3);
        
        


        // data.enemys.push("slicer,30,10,25,9,35,15");

        data.enemys.push("slicer,20,10,17,7,23,13");


        data.enemys.push("slicer,25,8,22,5,28,11");

        data.enemys.push("slicer,30,6,27,3,33,9");






























    } else if (level.indexOf("004") >= 0) { //Level 4 / Pause Menu
        summonElement("runner", objects.field, 25, 5);

        data.runner.position.top = 7;
        data.runner.position.left = 3;
        data.runner.inmenu = 1;

        data.field.height = 14;
        data.field.width = 14;
        objects.field.style.background = "#411";

        if (level == "004") {
            summonElement("trigger", objects.field, 4, 3, "loadLevel(1)");
            summonElement("textbox", objects.field, 5, 3, lang.newgame);

            summonElement("trigger", objects.field, 4, 5, "loadLevel(" + loadState("cLevel") + ")");
            summonElement("textbox", objects.field, 5, 5, lang.loadgame);

            summonElement("trigger", objects.field, 4, 7, "loadLevel(004-4)");
            summonElement("textbox", objects.field, 5, 7, lang.levelselect);

            summonElement("trigger", objects.field, 4, 9, "loadLevel(004-2)");
            summonElement("textbox", objects.field, 5, 9, lang.options);

        } else if (level == "004-2") { // Options menu

            summonElement("textbox", objects.field, 0, 0, lang.back);

            summonElement("trigger", objects.field, 4, 1, "saveState('colormode',t)");
            summonElement("textbox", objects.field, 5, 1, lang.colormode1);

            summonElement("trigger", objects.field, 4, 3, "loadLevel(004-5");
            summonElement("textbox", objects.field, 5, 3, lang.reset);

        } else if (level == "004-3") { // Pause menu
            loadLevel("004");

        } else if (level == "004-4") { // Level Selection
            summonElement("textbox", objects.field, 0, 0, lang.back);

            summonElement("trigger", objects.field, 4, 4, "loadLevel(001)");
            summonElement("textbox", objects.field, 5, 4, lang.levelname["001"]);

            summonElement("trigger", objects.field, 4, 5, "loadLevel(002-1)");
            summonElement("textbox", objects.field, 5, 5, lang.levelname["002"]);

            summonElement("trigger", objects.field, 4, 6, "loadLevel(003)");
            summonElement("textbox", objects.field, 5, 6, lang.levelname["003"]);

            summonElement("trigger", objects.field, 4, 7, "loadLevel(005)");
            summonElement("textbox", objects.field, 5, 7, lang.levelname["005"]);

            summonElement("trigger", objects.field, 4, 8, "loadLevel(006)");
            summonElement("textbox", objects.field, 5, 8, lang.levelname["006"]);

            summonElement("trigger", objects.field, 4, 9, "loadLevel(007)");
            summonElement("textbox", objects.field, 5, 9, lang.levelname["007"]);

            summonElement("trigger", objects.field, 4, 10, "loadLevel(008)");
            summonElement("textbox", objects.field, 5, 10, lang.levelname["008"]);
        } else if (level == "004-5") { // Reset
            reset();
        }


    } else if (level.indexOf("005") >= 0) { //Level 5

        summonElement("runner", objects.field, 10, 15);
        data.runner.position.top = 10;
        data.runner.position.left = 15;

        data.field.height = 12;
        data.field.width = 30;

        for (data.temp.iOfLG = 1; data.temp.iOfLG < 29; data.temp.iOfLG++) {
            data.walls.push("type1-2," + data.temp.iOfLG + ",0");
            if (data.temp.iOfLG != 15) {
                data.walls.push("type1-6," + data.temp.iOfLG + ",11");
            }
        }
        summonElement("trigger", objects.field, 15, 11, "loadLevel(002-3)");


        for (data.temp.iOfLG = 1; data.temp.iOfLG < 11; data.temp.iOfLG++) {
            data.walls.push("type1-8,0," + data.temp.iOfLG);
            data.walls.push("type1-4,29," + data.temp.iOfLG);

        }








    } else if (level.indexOf("006") >= 0) { //Level 6 - Dungeon 1
        summonElement("runner", objects.field, 100, 198);
        data.runner.position.top = 198;
        data.runner.position.left = 100;

        data.field.height = 200;
        data.field.width = 200;
        objects.field.style.backgroundColor = "#8a5";

        for (data.temp.iOfLG = 1; data.temp.iOfLG < 199; data.temp.iOfLG++) {

            if (data.temp.iOfLG != 88 && data.temp.iOfLG != 87 && data.temp.iOfLG != 100 && data.temp.iOfLG != 113 && data.temp.iOfLG != 114) {


                data.walls.push("type3-6," + data.temp.iOfLG + ",199");

                if (data.temp.iOfLG >= 88 && data.temp.iOfLG <= 112) {
                    data.walls.push("type3-6," + data.temp.iOfLG + ",184");
                    data.walls.push("type3-2," + data.temp.iOfLG + ",185");
                }
            }

        }

        for (data.temp.iOfLG = 186; data.temp.iOfLG < 199; data.temp.iOfLG++) {
            data.walls.push("type3-4,87," + data.temp.iOfLG);
            data.walls.push("type3-8,88," + data.temp.iOfLG);


            data.walls.push("type3-4,113," + data.temp.iOfLG);
            data.walls.push("type3-8,114," + data.temp.iOfLG);

            if (data.temp.iOfLG != 191 && data.temp.iOfLG != 192 && data.temp.iOfLG != 193) {

                data.enemys.push("pot1-1,89," + data.temp.iOfLG);
                data.enemys.push("pot1-1,90," + data.temp.iOfLG);
                data.enemys.push("pot1-1,91," + data.temp.iOfLG);

                data.enemys.push("pot1-1,112," + data.temp.iOfLG);
                data.enemys.push("pot1-1,111," + data.temp.iOfLG);
                data.enemys.push("pot1-1,110," + data.temp.iOfLG);
            }

            data.walls.push("chest1-1,90,192");
            data.walls.push("chest1-1,111,192");




        }



        summonElement("lamp1-3", "", 102, 199);
        summonElement("lamp1-3", "", 98, 199);

        summonElement("type3-5", "", 87, 199);
        summonElement("type3-7", "", 88, 199);


        summonElement("type3-5", "", 113, 199);
        summonElement("type3-7", "", 114, 199);

        summonElement("type3-5", "", 87, 184);
        summonElement("type3-7", "", 88, 184);
        summonElement("type3-3", "", 87, 185);
        summonElement("type3-1", "", 88, 185);

        summonElement("type3-5", "", 113, 184);
        summonElement("type3-7", "", 114, 184);
        summonElement("type3-3", "", 113, 185);
        summonElement("type3-1", "", 114, 185);


        summonElement("door1-1", "", 100, 185);
        summonElement("door1-3", "", 100, 184);

        summonElement("trigger", "", 100, 199, "loadLevel(002-3)");



    } else if (level.indexOf("007") >= 0) { //Level 7 - Dungeon 1

        soundtrack("start",songs["sonic"]);


        summonElement("runner", objects.field, 100, 198);
        data.runner.position.top = 198;
        data.runner.position.left = 100;

        data.field.height = 200;
        data.field.width = 200;
        objects.field.style.backgroundColor = "#8a5";



        summonElement("trigger", "", 100, 199, "loadLevel(002-3)");


        summonElement("lamp1-3", "", 102, 199);
        summonElement("lamp1-3", "", 98, 199);


        // //devtiles generator
        // for (data.temp.iOfLG = 80; data.temp.iOfLG < 120; data.temp.iOfLG++) {
        // for (data.temp.iOfLG2 = 140; data.temp.iOfLG2 < 180; data.temp.iOfLG2++) {
        //     summonElement("devtile","",data.temp.iOfLG,data.temp.iOfLG2);
        // }
        // }

        // //devtiles generator END


        for (data.temp.iOfLG = 1; data.temp.iOfLG < 199; data.temp.iOfLG++) {



            if (data.temp.iOfLG != 90 && data.temp.iOfLG != 91 && data.temp.iOfLG != 100 && data.temp.iOfLG != 109 && data.temp.iOfLG != 110 && data.temp.iOfLG != 71 && data.temp.iOfLG != 72 && data.temp.iOfLG != 128 && data.temp.iOfLG != 129 && data.temp.iOfLG != 147 && data.temp.iOfLG != 148 ) {

                summonElement("type3-5", "", 71, 199);
                summonElement("type3-7", "", 72, 199); 

                summonElement("type3-5", "", 128, 199);
                summonElement("type3-7", "", 129, 199); 


                summonElement("type3-5", "", 90, 199);
                summonElement("type3-7", "", 91, 199); 

                summonElement("type3-5", "", 109, 199);
                summonElement("type3-7", "", 110, 199);

                data.walls.push("type3-6," + data.temp.iOfLG + ",199");

                if (data.temp.iOfLG >= 73 && data.temp.iOfLG <= 148) {
                    data.walls.push("type3-6," + data.temp.iOfLG + ",188");
                    data.walls.push("type3-2," + data.temp.iOfLG + ",189");

                    data.walls.push("type3-6," + data.temp.iOfLG + ",177");
                    data.walls.push("type3-2," + data.temp.iOfLG + ",178");

                    data.walls.push("type3-6," + data.temp.iOfLG + ",166");
                    data.walls.push("type3-2," + data.temp.iOfLG + ",167");

                    data.walls.push("type3-6," + data.temp.iOfLG + ",155");
                    data.walls.push("type3-2," + data.temp.iOfLG + ",156");

                    data.walls.push("type3-6," + data.temp.iOfLG + ",144");
                    data.walls.push("type3-2," + data.temp.iOfLG + ",145");



                }
            }
        }

        for (data.temp.iOfLG = 146; data.temp.iOfLG < 199; data.temp.iOfLG++) {
            if (data.temp.iOfLG != 188 && data.temp.iOfLG != 189 && data.temp.iOfLG != 178 && data.temp.iOfLG != 177 && data.temp.iOfLG != 183 && data.temp.iOfLG != 166 && data.temp.iOfLG != 167 && data.temp.iOfLG != 155 && data.temp.iOfLG != 156 && data.temp.iOfLG != 161 && data.temp.iOfLG != 150) {
                data.walls.push("type3-4,90," + data.temp.iOfLG);
                data.walls.push("type3-8,91," + data.temp.iOfLG);

                data.walls.push("type3-4,109," + data.temp.iOfLG);
                data.walls.push("type3-8,110," + data.temp.iOfLG);

                data.walls.push("type3-4,128," + data.temp.iOfLG);
                data.walls.push("type3-8,129," + data.temp.iOfLG);

                data.walls.push("type3-4,71," + data.temp.iOfLG);
                data.walls.push("type3-8,72," + data.temp.iOfLG);

                data.walls.push("type3-4,109," + data.temp.iOfLG);
                data.walls.push("type3-8,110," + data.temp.iOfLG);

                data.walls.push("type3-4,147," + data.temp.iOfLG);
                data.walls.push("type3-8,148," + data.temp.iOfLG);




            }
        }


        




        summonElement("door1-1", "", 100, 189);
        summonElement("door1-3", "", 100, 188);

        for (data.temp.iOfLG = 92; data.temp.iOfLG < 109; data.temp.iOfLG++) {
            for (data.temp.iOfLG2 = 190; data.temp.iOfLG2 < 199; data.temp.iOfLG2++) {
                summonElement("floor3-1", "", data.temp.iOfLG, data.temp.iOfLG2);
            }
        }

        data.walls.push("chest1-1,94,192");


        summonElement("button1-1", "", 106, 192);

        data.walls.push("fire1-1,107,198");
        data.walls.push("fire1-1,108,198");
        data.walls.push("fire1-1,108,197");

        data.walls.push("fire1-1,92,198");
        data.walls.push("fire1-1,93,198");
        data.walls.push("fire1-1,92,197");



        for (data.temp.iOfLG = 92; data.temp.iOfLG < 109; data.temp.iOfLG++) {
            for (data.temp.iOfLG2 = 179; data.temp.iOfLG2 < 188; data.temp.iOfLG2++) {
                summonElement("floor3-1", "", data.temp.iOfLG, data.temp.iOfLG2);
            }
        }


        for (data.temp.iOfLG = 92; data.temp.iOfLG < 109; data.temp.iOfLG++) {
            for (data.temp.iOfLG2 = 168; data.temp.iOfLG2 < 177; data.temp.iOfLG2++) {
                summonElement("floor3-1", "", data.temp.iOfLG, data.temp.iOfLG2);
            }
        }




        data.enemys.push("hole,99,168");

        data.enemys.push("hole,104,168");
        data.enemys.push("hole,105,168");
        data.enemys.push("hole,106,168");
        data.enemys.push("hole,107,168");
        data.enemys.push("hole,108,168");

        data.enemys.push("hole,95,169");
        data.enemys.push("hole,96,169");
        data.enemys.push("hole,97,169");
        data.enemys.push("hole,98,169");
        data.enemys.push("hole,99,169");
        data.enemys.push("hole,100,169");
        data.enemys.push("hole,101,169");
        data.enemys.push("hole,108,169");

        data.enemys.push("hole,95,170");
        data.enemys.push("hole,99,170");
        data.enemys.push("hole,101,170");
        data.enemys.push("hole,102,170");
        data.enemys.push("hole,104,170");
        data.enemys.push("hole,105,170");
        data.enemys.push("hole,106,170");
        data.enemys.push("hole,108,170");

        data.enemys.push("hole,95,171");
        data.enemys.push("hole,99,171");
        data.enemys.push("hole,102,171");
        data.enemys.push("hole,104,171");
        data.enemys.push("hole,105,171");
        data.enemys.push("hole,106,171");
        data.enemys.push("hole,108,171");

        data.enemys.push("hole,99,172");
        data.enemys.push("hole,100,172");
        data.enemys.push("hole,101,172");
        data.enemys.push("hole,102,172");
        data.enemys.push("hole,104,172");
        data.enemys.push("hole,105,172");
        data.enemys.push("hole,106,172");
        data.enemys.push("hole,108,172");
        data.enemys.push("hole,93,172");
        data.enemys.push("hole,94,172");
        data.enemys.push("hole,95,172");

        data.enemys.push("hole,93,173");        
        data.enemys.push("hole,105,173");
        data.enemys.push("hole,106,173");
        data.enemys.push("hole,108,173");

        data.enemys.push("hole,93,174");
        data.enemys.push("hole,105,174");
        data.enemys.push("hole,106,174");
        data.enemys.push("hole,107,174");
        data.enemys.push("hole,108,174");

        data.enemys.push("hole,93,175");
        data.enemys.push("hole,105,175");

        data.enemys.push("hole,93,176");
        data.enemys.push("hole,105,176");

        


        summonElement("hole", "", 100,170);
        summonElement("hole", "", 100,171);
        summonElement("hole", "", 101,171);
        summonElement("hole", "", 92,169);
        summonElement("hole", "", 93,169);
        summonElement("hole", "", 94,169);
        summonElement("hole", "", 92,170);
        summonElement("hole", "", 93,170);
        summonElement("hole", "", 94,170);
        summonElement("hole", "", 92,171);
        summonElement("hole", "", 93,171);
        summonElement("hole", "", 94,171);
        summonElement("hole", "", 92,172);
        summonElement("hole", "", 92,173);
        summonElement("hole", "", 92,174);
        summonElement("hole", "", 92,175);
        summonElement("hole", "", 92,176);
        summonElement("hole", "", 92,168);
        summonElement("hole", "", 93,168);
        summonElement("hole", "", 94,168);
        summonElement("hole", "", 95,168);
        summonElement("hole", "", 96,168);
        summonElement("hole", "", 97,168);
        summonElement("hole", "", 98,168);
        summonElement("hole", "", 106, 175);
        summonElement("hole", "", 107, 175);
        summonElement("hole", "", 108, 175);
        summonElement("hole", "", 106, 176);
        summonElement("hole", "", 107, 176);
        summonElement("hole", "", 108, 176);





        
        
        summonElement("rupee1", "", 107, 171);
        summonElement("spring1", "", 107, 173);

        summonElement("trigger", objects.field, 107, 173, "spring(103,173)");

        data.walls.push("chest1-1,97,171");












        summonElement("floor3-5", "", 100, 179);
        summonElement("floor3-5", "", 99, 180);
        summonElement("floor3-5", "", 101, 180);
        summonElement("floor3-5", "", 98, 181);
        summonElement("floor3-5", "", 102, 181);
        summonElement("floor3-5", "", 97, 182);
        summonElement("floor3-5", "", 103, 182);
        summonElement("floor3-5", "", 96, 183);
        summonElement("floor3-5", "", 104, 183);
        summonElement("floor3-5", "", 97, 184);
        summonElement("floor3-5", "", 103, 184);
        summonElement("floor3-5", "", 98, 185);
        summonElement("floor3-5", "", 102, 185);
        summonElement("floor3-5", "", 101, 186);
        summonElement("floor3-5", "", 99, 186);
        summonElement("floor3-5", "", 100, 187);

            data.walls.push("door2-4, 91, 183");
            data.walls.push("door2-2, 90, 183");

            makeKeygroup(1,[[91,183],[90,183]]);

        summonElement("trigger", "", 92, 183, "keyuse(1)");













        for (data.temp.iOfLG = 111; data.temp.iOfLG < 128; data.temp.iOfLG++) {
            for (data.temp.iOfLG2 = 179; data.temp.iOfLG2 < 188; data.temp.iOfLG2++) {
                summonElement("floor3-1", "", data.temp.iOfLG, data.temp.iOfLG2);
            }
        }



        data.walls.push("type3-4,128,183");
        data.walls.push("type3-8,129,183");

        data.enemys.push("slicer,116,179,115,178,117,184");



        data.walls.push("type3-13,111,182");
        data.walls.push("type3-13,112,182");
        data.walls.push("type3-13,113,182");
        data.walls.push("type3-13,114,182");
        data.walls.push("type3-13,114,183");
        data.walls.push("type3-13,114,184");
        data.walls.push("type3-13,115,184");
        data.walls.push("type3-13,116,184");
        data.walls.push("type3-13,117,184");
        data.walls.push("type3-13,118,184");
        data.walls.push("type3-13,118,183");
        data.walls.push("type3-13,118,182");
        data.walls.push("type3-13,119,182");
        data.walls.push("type3-13,120,182");
        data.walls.push("type3-13,121,182");
        data.walls.push("type3-13,122,182");
        data.walls.push("type3-13,123,182");
        data.walls.push("type3-13,124,182");


        data.walls.push("type3-13,121,187");
        data.walls.push("type3-13,122,187");

        data.enemys.push("slicer,123,187");




        data.walls.push("type3-13,124,187");
        data.walls.push("type3-13,125,187");
        data.walls.push("type3-13,126,187");
        data.walls.push("type3-13,127,187");

        data.walls.push("type3-13,127,186");


        data.walls.push("type3-13,115,179");
        data.walls.push("type3-13,117,179");






        summonElement("floor3-5", "", 112, 180);


        summonElement("type3-5", "", 109, 188);
        summonElement("type3-7", "", 110, 188);
        summonElement("type3-3", "", 109, 189);
        summonElement("type3-1", "", 110, 189);

        summonElement("type3-5", "", 90, 188);
        summonElement("type3-7", "", 91, 188);
        summonElement("type3-3", "", 90, 189);
        summonElement("type3-1", "", 91, 189);

        summonElement("type3-5", "", 109, 177);
        summonElement("type3-7", "", 110, 177);
        summonElement("type3-3", "", 109, 178);
        summonElement("type3-1", "", 110, 178);

        summonElement("type3-5", "", 90, 177);
        summonElement("type3-7", "", 91, 177);
        summonElement("type3-3", "", 90, 178);
        summonElement("type3-1", "", 91, 178);
        
        summonElement("type3-5", "", 71, 177);
        summonElement("type3-7", "", 72, 177);
        summonElement("type3-3", "", 71, 178);
        summonElement("type3-1", "", 72, 178);

        summonElement("type3-5", "", 71, 188);
        summonElement("type3-7", "", 72, 188);
        summonElement("type3-3", "", 71, 189);
        summonElement("type3-1", "", 72, 189);




        summonElement("type3-5", "", 71, 166);
        summonElement("type3-7", "", 72, 166);
        summonElement("type3-3", "", 71, 167);
        summonElement("type3-1", "", 72, 167);

        summonElement("type3-5", "", 90, 166);
        summonElement("type3-7", "", 91, 166);
        summonElement("type3-3", "", 90, 167);
        summonElement("type3-1", "", 91, 167);

        summonElement("type3-5", "", 109, 166);
        summonElement("type3-7", "", 110, 166);
        summonElement("type3-3", "", 109, 167);
        summonElement("type3-1", "", 110, 167);

        summonElement("type3-5", "", 128, 166);
        summonElement("type3-7", "", 129, 166);
        summonElement("type3-3", "", 128, 167);
        summonElement("type3-1", "", 129, 167);



        summonElement("type3-5", "", 71, 155);
        summonElement("type3-7", "", 72, 155);
        summonElement("type3-3", "", 71, 156);
        summonElement("type3-1", "", 72, 156);

        summonElement("type3-5", "", 90, 155);
        summonElement("type3-7", "", 91, 155);
        summonElement("type3-3", "", 90, 156);
        summonElement("type3-1", "", 91, 156);

        summonElement("type3-5", "", 109, 155);
        summonElement("type3-7", "", 110, 155);
        summonElement("type3-3", "", 109, 156);
        summonElement("type3-1", "", 110, 156);

        summonElement("type3-5", "", 128, 155);
        summonElement("type3-7", "", 129, 155);
        summonElement("type3-3", "", 128, 156);
        summonElement("type3-1", "", 129, 156);

        summonElement("type3-5", "", 147, 155);
        summonElement("type3-7", "", 148, 155);
        summonElement("type3-3", "", 147, 156);
        summonElement("type3-1", "", 148, 156);





        summonElement("type3-5", "", 71, 144);
        summonElement("type3-7", "", 72, 144);
        summonElement("type3-3", "", 71, 145);
        summonElement("type3-1", "", 72, 145);

        summonElement("type3-5", "", 90, 144);
        summonElement("type3-7", "", 91, 144);
        summonElement("type3-3", "", 90, 145);
        summonElement("type3-1", "", 91, 145);

        summonElement("type3-5", "", 109, 144);
        summonElement("type3-7", "", 110, 144);
        summonElement("type3-3", "", 109, 145);
        summonElement("type3-1", "", 110, 145);

        summonElement("type3-5", "", 128, 144);
        summonElement("type3-7", "", 129, 144);
        summonElement("type3-3", "", 128, 145);
        summonElement("type3-1", "", 129, 145);
        
        summonElement("type3-5", "", 147, 144);
        summonElement("type3-7", "", 148, 144);
        summonElement("type3-3", "", 147, 145);
        summonElement("type3-1", "", 148, 145);





        summonElementKey("key1","temple1","1",112,180); // key1, level 1, key 1, x, y

        










        for (data.temp.iOfLG = 73; data.temp.iOfLG < 90; data.temp.iOfLG++) {
            for (data.temp.iOfLG2 = 179; data.temp.iOfLG2 < 188; data.temp.iOfLG2++) {
                summonElement("floor3-1", "", data.temp.iOfLG, data.temp.iOfLG2);
            }
        }


        data.enemys.push("hole,86,180");
        data.enemys.push("hole,86,181");
        data.enemys.push("hole,86,182");
        data.enemys.push("hole,86,183");
        data.enemys.push("hole,86,184");
        data.enemys.push("hole,86,185");
        data.enemys.push("hole,86,186");
        data.enemys.push("hole,86,187");


        data.enemys.push("hole,84,179");
        data.enemys.push("hole,84,180");
        data.enemys.push("hole,84,181");
        data.enemys.push("hole,84,182");
        data.enemys.push("hole,84,183");
        data.enemys.push("hole,84,184");
        data.enemys.push("hole,84,185");
        data.enemys.push("hole,84,187");

        data.enemys.push("hole,74,180");
        data.enemys.push("hole,75,180");
        data.enemys.push("hole,76,180");
        data.enemys.push("hole,76,181");
        data.enemys.push("hole,77,181");
        data.enemys.push("hole,78,181");
        data.enemys.push("hole,78,182");
        data.enemys.push("hole,78,183");
        data.enemys.push("hole,79,183");
        data.enemys.push("hole,79,184");
        data.enemys.push("hole,79,185");
        data.enemys.push("hole,79,186");
        data.enemys.push("hole,79,187");

        data.enemys.push("hole,80,179");
        data.enemys.push("hole,80,180");
        data.enemys.push("hole,80,181");

        data.enemys.push("hole,82,180");
        data.enemys.push("hole,82,181");
        data.enemys.push("hole,82,182");
        data.enemys.push("hole,82,183");

        data.enemys.push("hole,83,187");
        data.enemys.push("hole,82,187");
        data.enemys.push("hole,81,187");
        data.enemys.push("hole,80,187");

        data.enemys.push("hole,83,185");
        data.enemys.push("hole,82,185");
        data.enemys.push("hole,81,185");

        data.enemys.push("hole,80,183");
        data.enemys.push("hole,81,183");


        data.enemys.push("hole,73,186");
        data.enemys.push("hole,74,187");
        data.enemys.push("hole,73,187");



        data.enemys.push("hole,78,179");


// Room 0012 

for (data.temp.iOfLG = 92; data.temp.iOfLG < 109; data.temp.iOfLG++) {
    for (data.temp.iOfLG2 = 157; data.temp.iOfLG2 < 166; data.temp.iOfLG2++) {
        summonElement("floor3-1", "", data.temp.iOfLG, data.temp.iOfLG2);
    }
}



    data.enemys.push("hole,92,158");
    data.enemys.push("hole,93,158");
    data.enemys.push("hole,94,158");
    data.enemys.push("hole,95,158");
    data.enemys.push("hole,96,158");
    data.enemys.push("hole,97,158");
    data.enemys.push("hole,103,158");
    data.enemys.push("hole,97,157");
    data.enemys.push("hole,104,158");
    data.enemys.push("hole,105,158");
    data.enemys.push("hole,106,158");
    data.enemys.push("hole,107,158");
    data.enemys.push("hole,108,158");
    data.enemys.push("hole,103,157");
    data.enemys.push("hole,92,164");
    data.enemys.push("hole,93,164");
    data.enemys.push("hole,94,164");
    data.enemys.push("hole,95,164");
    data.enemys.push("hole,96,164");
    data.enemys.push("hole,97,164");
    data.enemys.push("hole,97,165");
    data.enemys.push("hole,103,164");
    data.enemys.push("hole,104,164");
    data.enemys.push("hole,105,164");
    data.enemys.push("hole,106,164");
    data.enemys.push("hole,107,164");
    data.enemys.push("hole,108,164");
    data.enemys.push("hole,103,165");

    summonElement("hole", "", 92,157);
    summonElement("hole", "", 93,157);
    summonElement("hole", "", 94,157);
    summonElement("hole", "", 95,157);
    summonElement("hole", "", 96,157);

    summonElement("hole", "", 104,157);
    summonElement("hole", "", 105,157);
    summonElement("hole", "", 106,157);
    summonElement("hole", "", 107,157);
    summonElement("hole", "", 108,157);

    summonElement("hole", "", 92,165);
    summonElement("hole", "", 93,165);
    summonElement("hole", "", 94,165);
    summonElement("hole", "", 95,165);
    summonElement("hole", "", 96,165);

    summonElement("hole", "", 104,165);
    summonElement("hole", "", 105,165);
    summonElement("hole", "", 106,165);
    summonElement("hole", "", 107,165);
    summonElement("hole", "", 108,165);




    data.walls.push("type3-13,97,159");
    data.walls.push("type3-13,103,159");
    data.walls.push("type3-13,97,163");
    data.walls.push("type3-13,103,163");
// Room 0012 end




// Room 0013
data.enemys.push("water1,73,165");
data.enemys.push("water1,74,165");
data.enemys.push("water1,75,165");
data.enemys.push("water1,76,165");
data.enemys.push("water1,77,165");
data.enemys.push("water1,78,165");
data.enemys.push("water1,79,165");

data.enemys.push("water1,83,165");
data.enemys.push("water1,84,165");
data.enemys.push("water1,85,165");
data.enemys.push("water1,86,165");
data.enemys.push("water1,87,165");
data.enemys.push("water1,88,165");
data.enemys.push("water1,89,165");



data.enemys.push("water1,73,164");
data.enemys.push("water1,74,164");
data.enemys.push("water1,75,164");
data.enemys.push("water1,76,164");
data.enemys.push("water1,77,164");
data.enemys.push("water1,78,164");
data.enemys.push("water1,79,164");
data.enemys.push("water1,80,164");
data.enemys.push("water1,81,164");
data.enemys.push("water1,82,164");
data.enemys.push("water1,83,164");
data.enemys.push("water1,84,164");
data.enemys.push("water1,85,164");
data.enemys.push("water1,86,164");
data.enemys.push("water1,87,164");
data.enemys.push("water1,88,164");
data.enemys.push("water1,89,164");


data.enemys.push("water1,80,163");
data.enemys.push("water1,81,163");
data.enemys.push("water1,82,163");

summonElement("water2","",80,165);
summonElement("water2","",81,165);
summonElement("water2","",82,165);








data.enemys.push("water1,73,157");
data.enemys.push("water1,74,157");
data.enemys.push("water1,75,157");
data.enemys.push("water1,76,157");
data.enemys.push("water1,77,157");
data.enemys.push("water1,78,157");
data.enemys.push("water1,79,157");

data.enemys.push("water1,83,157");
data.enemys.push("water1,84,157");
data.enemys.push("water1,85,157");
data.enemys.push("water1,86,157");
data.enemys.push("water1,87,157");
data.enemys.push("water1,88,157");
data.enemys.push("water1,89,157");



data.enemys.push("water1,73,158");
data.enemys.push("water1,74,158");
data.enemys.push("water1,75,158");
data.enemys.push("water1,76,158");
data.enemys.push("water1,77,158");
data.enemys.push("water1,78,158");
data.enemys.push("water1,79,158");
data.enemys.push("water1,80,158");
data.enemys.push("water1,81,158");
data.enemys.push("water1,82,158");
data.enemys.push("water1,83,158");
data.enemys.push("water1,84,158");
data.enemys.push("water1,85,158");
data.enemys.push("water1,86,158");
data.enemys.push("water1,87,158");
data.enemys.push("water1,88,158");
data.enemys.push("water1,89,158");


data.enemys.push("water1,80,159");
data.enemys.push("water1,81,159");
data.enemys.push("water1,82,159");

summonElement("water2","",80,157);
summonElement("water2","",81,157);
summonElement("water2","",82,157);








// Room 0013 end


// Room 0014
for (var x = 92; x <= 108; x++) {
    for (var y = 146; y <= 154; y++) {
        summonElement("floor3-1", "", x, y);
    }
}


for(var x=92;x<95;x++) {
    for(var y=146;y<=154;y++) {
        summonElement("hole", "", x,y);
    }
}

    for(var y=147;y<=154;y++) {
        data.enemys.push("hole,95,"+y);
    }

    for(var x=95;x<=108;x++) {
            summonElement("hole", "", x,146);
            data.enemys.push("hole,"+x+",147");
    }

    data.enemys.push("hole,105,153");
    data.enemys.push("hole,106,153");
    data.enemys.push("hole,107,153");
    data.enemys.push("hole,108,153");

    data.enemys.push("hole,105,154");
    data.enemys.push("hole,106,154");
    data.enemys.push("hole,107,154");
    data.enemys.push("hole,108,154");






// Room 0014 end

// Room 0015
for (var x = 111; x <= 127; x++) {
    for (var y = 146; y <= 154; y++) {
        summonElement("floor3-1", "", x, y);
    }
}

for(var x=111;x<=127;x++) {
        summonElement("hole", "", x,146);
        summonElement("hole", "", x,154);

        data.enemys.push("hole,"+x+",147");
        data.enemys.push("hole,"+x+",153");
}




// Room 0015 end



// Room 0016
for (var x = 130; x <= 146; x++) {
    for (var y = 146; y <= 154; y++) {
        summonElement("floor3-1", "", x, y);
    }
}


for(var x=130;x<=146;x++) {
        summonElement("hole", "", x,146);
}

for(var x=130;x<=143;x++) {
        data.enemys.push("hole,"+x+",147");
}

for(var y=147;y<=154;y++) {
    data.enemys.push("hole,143,"+y);
}

for(var x=144;x<=146;x++) {
    for(var y=146;y<=154;y++) {
        summonElement("hole", "", x,y);
    }
}



    data.enemys.push("hole,130,153");
    data.enemys.push("hole,131,153");
    data.enemys.push("hole,132,153");
    data.enemys.push("hole,133,153");

    data.enemys.push("hole,130,154");
    data.enemys.push("hole,131,154");
    data.enemys.push("hole,132,154");
    data.enemys.push("hole,133,154");
// Room 0016 end


// Room 0017
for (var x = 130; x <= 146; x++) {
    for (var y = 157; y <= 165; y++) {
        summonElement("floor3-1", "", x, y);
    }
}

data.enemys.push("hole,130,157");
data.enemys.push("hole,131,157");
data.enemys.push("hole,132,157");
data.enemys.push("hole,133,157");

data.enemys.push("hole,130,158");
data.enemys.push("hole,131,158");
data.enemys.push("hole,132,158");

data.enemys.push("hole,130,159");
data.enemys.push("hole,131,159");

data.enemys.push("hole,130,160");


data.enemys.push("hole,146,157");
data.enemys.push("hole,145,157");
data.enemys.push("hole,144,157");
data.enemys.push("hole,143,157");

data.enemys.push("hole,146,158");
data.enemys.push("hole,145,158");
data.enemys.push("hole,144,158");

data.enemys.push("hole,146,159");
data.enemys.push("hole,145,159");

data.enemys.push("hole,146,160");


data.walls.push("type3-13,138,162");

data.walls.push("type3-13,137,163");
summonElement("type3-13","",138,163);
data.walls.push("type3-13,139,163");

data.walls.push("type3-13,136,164");
summonElement("type3-13","",137,164);
summonElement("type3-13","",138,164);
summonElement("type3-13","",139,164);
data.walls.push("type3-13,140,164");

data.walls.push("type3-13,136,165");
summonElement("type3-13","",137,165);
summonElement("type3-13","",138,165);
summonElement("type3-13","",139,165);
data.walls.push("type3-13,140,165");
// Room 0017 end


// Room 0018 & Room 0019
for(var y=168;y<=187;y++) {
    if(y!=177 && y!=178) {
        data.walls.push("type3-13,136,"+y);
        summonElement("type3-13","",137,y);
        summonElement("type3-13","",138,y);
        summonElement("type3-13","",139,y);
        data.walls.push("type3-13,140,"+y);
    
    }
    
}



// Room 0018 & Room 0019 end


// Room 0020 DEVROOM

if(pData.runner.developer == 1) {
    summonElementKey("key1","temple1","8",73,168); // key1, level 1, key 8, x, y
    summonElementKey("key1","temple1","9",73,170); // key1, level 1, key 9, x, y
}

// Room 0020 DEVROOM end
























    } else if (level.indexOf("008") >= 0) { //Level 8 - Demo Overworld

        summonElement("runner", objects.field, 10, 10);
        data.runner.position.top = 10;
        data.runner.position.left = 10;

        data.field.height = 30;
        data.field.width = 60;
        objects.field.style.backgroundColor = "#8a5";

        data.walls.push("type2-25,12,3");

        for(var x=13;x<21;x++) {
            data.walls.push("type2-26,"+x+",3");
        }
        data.walls.push("type2-5,12,4");

        for(var x=6;x<12;x++) {
            data.walls.push("type2-26,"+x+",4");
        }
        data.walls.push("type2-25,5,4");
        data.walls.push("type2-5,5,5");
        data.walls.push("type2-25,4,5");
        data.walls.push("type2-4,4,6");
        data.walls.push("type2-4,4,7");
        data.walls.push("type2-4,4,8");
        data.walls.push("type2-3,5,9");
        data.walls.push("type2-12,4,9");
        data.walls.push("type2-4,5,10");
        data.walls.push("type2-12,5,11");
        data.walls.push("type2-3,6,11");
        data.walls.push("type2-12,6,12");
        data.walls.push("type2-3,7,12");
        summonElement("stairs2-1","",8,13);
        summonElement("stairs2-1","",8,14);
        summonElement("stairs2-1","",9,13);
        summonElement("stairs2-1","",9,14);



        data.walls.push("type2-1,10,12");
        data.walls.push("type2-2,11,12");
        data.walls.push("type2-2,12,12");
        data.walls.push("type2-2,13,12");
        data.walls.push("type2-2,14,12");

        data.walls.push("type2-3,15,12");

        data.walls.push("type2-12,15,13");
        data.walls.push("type2-12,19,14");

        data.walls.push("type2-2,16,13");
        data.walls.push("type2-2,17,13");
        data.walls.push("type2-2,18,13");

        data.walls.push("type2-3,19,13");

        data.walls.push("type2-3,20,14");
        data.walls.push("type2-12,20,15");
        data.walls.push("type2-3,21,15");
        data.walls.push("type2-12,21,16");

        data.walls.push("type2-2,22,16");
        data.walls.push("type2-2,23,16");
        data.walls.push("type2-2,24,16");
        data.walls.push("type2-2,25,16");
        data.walls.push("type2-3,26,16");
        data.walls.push("type2-12,26,17");

        data.walls.push("type2-2,27,17");
        data.walls.push("type2-2,28,17");
        data.walls.push("type2-2,29,17");
        data.walls.push("type2-2,30,17");
        data.walls.push("type2-2,31,17");
        data.walls.push("type2-2,32,17");
        data.walls.push("type2-2,33,17");
        data.walls.push("type2-2,34,17");
        data.walls.push("type2-2,35,17");
        data.walls.push("type2-2,36,17");
        data.walls.push("type2-2,37,17");

        data.walls.push("type2-11,38,17");
        data.walls.push("type2-1,38,16");

        data.walls.push("type2-11,39,16");
        data.walls.push("type2-1,39,15");
        data.walls.push("type2-2,40,15");

        data.walls.push("type2-11,41,15");

        data.walls.push("type2-1,41,14");
        data.walls.push("type2-11,42,14");

        data.walls.push("type2-1,42,13");
        data.walls.push("type2-11,43,13");

        data.walls.push("type2-8,43,12");
        data.walls.push("type2-8,43,11");
        data.walls.push("type2-1,43,10");

        data.walls.push("type2-11,44,10");
        data.walls.push("type2-8,44,9");
        data.walls.push("type2-8,44,8");
        data.walls.push("type2-8,44,7");

        data.walls.push("type2-27,44,6");
        data.walls.push("type2-7,43,6");
        data.walls.push("type2-8,43,5");

        data.walls.push("type2-7,42,4");

        data.walls.push("type2-6,41,3");
        data.walls.push("type2-7,40,3");

        data.walls.push("type2-6,39,2");
        data.walls.push("type2-6,38,2");
        data.walls.push("type2-6,37,2");
        data.walls.push("type2-6,36,2");
        data.walls.push("type2-6,35,2");
        data.walls.push("type2-6,34,2");
        data.walls.push("type2-6,33,2");
        data.walls.push("type2-6,32,2");
        data.walls.push("type2-25,31,2");


        data.walls.push("type2-25,28,3");
        data.walls.push("type2-6,29,3");
        data.walls.push("type2-6,30,3");
        data.walls.push("type2-5,31,3");


        data.walls.push("type2-7,25,4");
        data.walls.push("type2-6,26,4");
        data.walls.push("type2-6,27,4");
        data.walls.push("type2-5,28,4");





















   
    } else {
        alert("Level does not exist.");
        level = "1";
        saveState("cLevel", "1");
        window.location.reload();
    }
    if (level.toString().indexOf("004") >= 0) {

    } else {
        saveState("cLevel", level);

    }



    init2();

    setTimeout(function () {

        objects.gameframe.classList.remove("loadframe");

    }, data.ticktime / 2);

}