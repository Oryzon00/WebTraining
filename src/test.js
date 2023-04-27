{
    ;
    function test(obj) {
        obj.truc = 5;
    }
    function main() {
        var x1 = {
            truc: 0
        };
        var x2;
        console.log(x2);
        console.log("test");
        x1.truc = 1;
        console.log(x1.truc);
        test(x1);
        console.log(x1.truc);
    }
    main();
}
