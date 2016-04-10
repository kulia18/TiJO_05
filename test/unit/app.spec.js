describe('app', function () {
    'use strict';

    var app = window.app;

    describe('generateMessage', function () {
        //Tests for task #1A
        it(' ', function () {
            expect(app.generateMessage("ala")).toEqual({vowel: 2, palindrome: true});
        });
        it(' ', function () {
            expect(app.generateMessage("zbyszek")).toEqual({vowel: 2, palindrome: false});
        });

    });
    //1B
    describe('isPalindrome', function () {

        describe('toHaveBeenCalled', function () {
            beforeAll(function (){
                spyOn(app, 'isPalindrome');
                app.isPalindrome('ala');
            });
            it('should call isPalindrome function', function() {
                expect(app.isPalindrome).toHaveBeenCalled();
                expect(app.isPalindrome).toHaveBeenCalledWith('ala');
            });
        });


        describe('and.callThrough', function () {
            beforeAll(function (){
                spyOn(app, 'isPalindrome').and.callThrough();
                app.generateMessage('ala');
            });
            it('should call isPalindrome function' + 'when generateMessage is call', function() {
                expect(app.isPalindrome).toHaveBeenCalled();
                expect(app.isPalindrome).toHaveBeenCalledWith('ala');
            });
        });

        describe('and.returnValue', function () {
            var result;
            beforeAll(function (){
                spyOn(app, 'isPalindrome').and.returnValue(true);
            });
            it('should call isPalindrome function and return true', function() {
                result = app.isPalindrome('ala');
                expect(result).toBe(true);
            });
            it('should call generateMessage and isPalindrome functions, result should be equal true', function() {
                result = app.generateMessage('ala');
                expect(result).toEqual({vowel: 2, palindrome: true});
            });
        });



        describe('and.callFake', function () {
            beforeAll(function() {
                spyOn(app, 'isPalindrome').and.callFake(function () {
                    return 'fejk'

                });

            });
            it('should notice that isPalindrome fake function', function() {
                expect(app.isPalindrome('cos')).toEqual('fejk')
            });
            it('should call generateMessage and isPalindrome fake function', function() {
                expect(app.generateMessage('ala')).toEqual({vowel: 2, palindrome: 'fejk'})
            });
        });

        describe('calls.count()', function () {
            var result;
            beforeAll(function (){
                spyOn(app, 'isPalindrome').and.callThrough;
            });
            it('should notice that isPalindrome is call', function() {
                result = app.isPalindrome('ala');
                expect(app.isPalindrome.calls.count()).toBe(1);
            });
            it('should notice that isPalindrome function is call, when generateMessage is call', function() {
                result = app.generateMessage('ala');
                expect(app.isPalindrome.calls.count()).toEqual(2);
            });
        });
    });

    describe('vowelCount', function () {

        describe('toHaveBeenCalled', function () {
            beforeAll(function (){
                spyOn(app, 'vowelCount');
                app.vowelCount('ala');
            });
            it('should call vowelCount function', function() {
                expect(app.vowelCount).toHaveBeenCalled();
                expect(app.vowelCount).toHaveBeenCalledWith('ala');
            });
        });

        describe('and.callThrough', function () {
            beforeAll(function (){
                spyOn(app, 'vowelCount').and.callThrough();
                app.generateMessage('ala');
            });
            it('should call vowelCount function when generateMessage is call', function() {
                expect(app.vowelCount).toHaveBeenCalled();
                expect(app.vowelCount).toHaveBeenCalledWith('ala');
            });
        });

        describe('and.returnValue', function () {
            var result;
            beforeAll(function (){
                spyOn(app, 'vowelCount').and.returnValue(2);
            });
            it('should call vowelCount function and return true', function() {
                result = app.vowelCount('ala');
                expect(result).toEqual(2);
            });
            it('should call generateMessage and vowelCount functions, result should be equal 2', function() {
                result = app.generateMessage('ala');
                expect(result).toEqual({vowel: 2, palindrome: true});
            });
        });


        describe('and.callFake', function () {
            beforeAll(function() {
                spyOn(app, 'vowelCount').and.callFake(function (str) {
                    return 'cos';
                });
            });
            it('should call vowelCount fake', function() {
                expect(app.vowelCount('program')).toEqual('cos');
            });
            it('should call generateMessage and isPalindrome fake ', function() {
                expect(app.generateMessage('ala')).toEqual({vowel: 'cos', palindrome: true})
            });
        });

        describe('calls.count()', function () {
            var result;
            beforeAll(function (){
                spyOn(app, 'vowelCount').and.callThrough;
            });
            it('should notice that vowelCount is called', function() {
                result = app.vowelCount('ala');
                expect(app.vowelCount.calls.count()).toBe(1);
            });
            it('should notice that vowelCount  generateMessage are called', function() {
                result = app.generateMessage('ala');
                expect(app.vowelCount.calls.count()).toEqual(2);
            });
        });
    });
});