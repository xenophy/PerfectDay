describe("Ext.slider.Multi", function() {
    var slider,
        createSlider;

    beforeEach(function() {
        createSlider = function(config) {
            slider = new Ext.slider.Multi(Ext.apply({
                renderTo: Ext.getBody(),
                name: "test",
                width: 219,
                labelWidth: 0,
                minValue: 0,
                maxValue: 100,
                animate: false
            }, config));
        };

    });
    afterEach(function() {
        if (slider) {
            slider.destroy();
        }
        slider = null;
    });
    
    describe("component initialization", function() {
        describe("keyIncrement", function() {
            describe("if keyIncrement > increment", function() {
                it("should equal passed keyIncrement", function() {
                    createSlider({
                        keyIncrement: 10,
                        increment: 4
                    });

                    expect(slider.keyIncrement).toEqual(10);
                });
            });
            
            describe("if keyIncrement < increment", function() {
                it("should equal passed keyIncrement", function() {
                    createSlider({
                        keyIncrement: 7,
                        increment: 11
                    });

                    expect(slider.keyIncrement).toEqual(11);
                });
            });
        });
        
        describe("if vertical", function() {
            beforeEach(function() {
                createSlider({
                    vertical: true
                });
            });
            
            specFor(Ext.slider.Multi.Vertical, function(key, value) {
                it("should override " + key + " method", function() {
                    expect(slider[key]).toBe(value);
                });
            });

        });

        describe("thumbs", function() {
            describe("if there is no value in configuration", function() {
                beforeEach(function() {
                    createSlider();
                });
                
                it("should create one thumb", function() {
                    expect(slider.thumbs.length).toEqual(1);
                });

                it("should set the thumb value to 0", function() {
                    expect(slider.thumbs[0].value).toEqual(0);
                });
            });

            describe("if there is an array of values in configuration", function() {
                describe("with values [0, 10, 20, 30]", function() {
                    var values = [0, 10, 20, 30];
                    
                    beforeEach(function() {
                        createSlider({
                            values: values
                        });
                    });
                    
                    specFor(values, function(property, value) {
                        it("should set the thumb " + property + " value to " + value, function() {
                            expect(slider.thumbs[property].value).toEqual(value);
                        });
                    });
                });
            });
        });
    });

    describe("addThumbs", function() {
        beforeEach(function() {
            createSlider();
            spyOn(slider, "addThumb").andCallThrough();
            spyOn(Ext.slider.Thumb.prototype, "render").andCallThrough();
        });

        it("should return the thumb", function() {
            expect(slider.addThumb(17) instanceof Ext.slider.Thumb).toBe(true);
        });
        
        it("should add the thumb to the slider", function() {
            slider.addThumb(17);
            expect(slider.thumbs.length).toEqual(2);
        });

        it("should render the thumb if slider is rendered", function() {
            slider.addThumb(17);
            expect(Ext.slider.Thumb.prototype.render).toHaveBeenCalled();
        });

        it("should not render the thumb is slider isn't rendered", function() {
            var thumb;
            slider.rendered = false;
            thumb = slider.addThumb(17);
            expect(Ext.slider.Thumb.prototype.render).not.toHaveBeenCalled();
            slider.rendered = true;
            thumb.render();
        });
    });

    describe("thumb slide", function() {
        describe("horizontal", function() {
            var thumb0, thumb60, thumb90,
                setupSlider = function(config) {
                    createSlider(Ext.apply({
                        values: [0, 60, 90]
                    }, config));
                    
                    thumb0 = slider.thumbs[0];
                    thumb60 = slider.thumbs[1];
                    thumb90 = slider.thumbs[2];
                    
                    spyOn(slider, "fireEvent").andCallThrough();
                };
            
            describe("mouse events", function() {
                describe("on slider mousedown", function() {
                    describe("on thumb", function() {
                        describe("no drag (mousedown/mouseup)", function() {
                            beforeEach(function() {
                                setupSlider();
                                var xy = thumb0.el.getXY();
                                jasmine.fireMouseEvent(thumb0.el, 'mousedown', xy[0], xy[1]);
                                jasmine.fireMouseEvent(thumb0.el, 'mouseup', xy[0], xy[1]);
                            });

                            it("should not fire any events", function() {
                                var calls = slider.fireEvent.calls,
                                    length = calls.length;

                                expect(length).toEqual(0);
                            });
                        });

                        var dragConfig = {};
                        
                        dragConfig["drag without snapping"] = {
                            config: {},
                            expected: 3
                        };
                        
                        dragConfig["drag with snapping"] = {
                            config: {
                                increment: 5
                            },
                            expected: 5
                        };
                        
                        specFor(dragConfig, function(key, value) {
                           describe(key, function() {
                                beforeEach(function() {
                                    setupSlider(value.config);
                                    var xy = thumb0.el.getXY();
                                    jasmine.fireMouseEvent(thumb0.el, 'mousedown', xy[0], xy[1]);
                                    jasmine.fireMouseEvent(thumb0.el, 'mousemove', xy[0] + 12, xy[1]);
                                    jasmine.fireMouseEvent(thumb0.el, 'mouseup', xy[0] + 12, xy[1]);
                                });

                                it("should call dragstart event", function() {
                                    expect(slider.fireEvent.calls[0].args[0]).toBe("dragstart");
                                    expect(slider.fireEvent.calls[0].args[1]).toBe(slider);
                                    expect(slider.fireEvent.calls[0].args[3]).toBe(thumb0);
                                });
                                
                                it("should fire beforechange event", function() {
                                    expect(slider.fireEvent.calls[1].args[0]).toBe("beforechange");
                                    expect(slider.fireEvent).toHaveBeenCalledWith("beforechange", slider, value.expected, 0, thumb0);
                                });
                                
                                it("should fire change event", function() {
                                    expect(slider.fireEvent.calls[2].args[0]).toBe("change");
                                    expect(slider.fireEvent).toHaveBeenCalledWith("change", slider, value.expected, thumb0);
                                });
                                
                                it("should call drag event", function() {
                                    expect(slider.fireEvent.calls[3].args[0]).toBe("drag");
                                    expect(slider.fireEvent.calls[3].args[1]).toBe(slider);
                                    expect(slider.fireEvent.calls[3].args[3]).toBe(thumb0);
                                });
                                
                                it("should call dragend event", function() {
                                    expect(slider.fireEvent.calls[4].args[0]).toBe("dragend");
                                    expect(slider.fireEvent.calls[4].args[1]).toBe(slider);
                                });
                                
                                it("should fire changecomplete event", function() {
                                    expect(slider.fireEvent.calls[5].args[0]).toBe("changecomplete");
                                    expect(slider.fireEvent).toHaveBeenCalledWith("changecomplete", slider, value.expected, thumb0);
                                });
                            });
                        });
                    });

                    describe("outside thumbs", function() {
                        beforeEach(function() {
                            setupSlider();
                        });
                        
                        describe("if slider enabled", function() {
                            beforeEach(function() {
                                var xy = slider.innerEl.getXY();
                                jasmine.fireMouseEvent(slider.el, 'mousedown', xy[0] + 100, xy[1] + 8);
                                jasmine.fireMouseEvent(slider.el, 'mouseup', xy[0] + 100, xy[1] + 8);
                                jasmine.fireMouseEvent(slider.el, 'mouseclick', xy[0] + 100, xy[1] + 8);
                            });
                            
                            it("should fire beforechange event", function() {
                                expect(slider.fireEvent).toHaveBeenCalledWith("beforechange", slider, 50, 60, thumb60);
                            });
                            
                            it("should fire change event", function() {
                                expect(slider.fireEvent).toHaveBeenCalledWith("change", slider, 50, thumb60);
                            });

                            it("should fire changecomplete event", function() {
                                expect(slider.fireEvent).toHaveBeenCalledWith("changecomplete", slider, 50, thumb60);
                            });
                        });
                        
                        describe("if slider disabled", function() {
                            beforeEach(function() {
                                slider.disable();
                                var xy = slider.innerEl.getXY();
                                jasmine.fireMouseEvent(slider.el, 'mousedown', xy[0] + 10, xy[1] + 10);
                            });

                            it("should not fire any *change* events", function() {
                                var calls = slider.fireEvent.calls,
                                    length = calls.length,
                                    call, i;
                                    
                                for (i = 0; i < length; i++) {
                                    call = calls[i];
                                    expect(call.args[0].search("change")).toEqual(-1);
                                }
                            });                  
                        });
                    });
                });
            });
        });

        describe("vertical", function() {
            var thumb0, thumb60, thumb90,
                setupSlider = function(config) {
                    createSlider(Ext.apply({
                        values: [0, 60, 90],
                        height: 214,
                        vertical: true
                    }, config));
                    
                    thumb0 = slider.thumbs[0];
                    thumb60 = slider.thumbs[1];
                    thumb90 = slider.thumbs[2];
                    
                    spyOn(slider, "fireEvent").andCallThrough();
                };
            
            describe("mouse events", function() {
                describe("on slider mousedown", function() {
                    describe("on thumb", function() {
                        describe("no drag (mousedown/mouseup)", function() {
                            beforeEach(function() {
                                setupSlider();
                                var xy = thumb0.el.getXY();
                                jasmine.fireMouseEvent(thumb0.el, 'mousedown', xy[0], xy[1] - 17);
                                jasmine.fireMouseEvent(thumb0.el, 'mouseup', xy[0], xy[1] - 17);
                            });

                            it("should not fire any events", function() {
                                var calls = slider.fireEvent.calls,
                                    length = calls.length;

                                expect(length).toEqual(0);
                            });   
                        });

                        var dragConfig = {};
                        
                        dragConfig["drag without snapping"] = {
                            config: {},
                            expected: 12
                        };
                        
                        dragConfig["drag with snapping"] = {
                            config: {
                                increment: 10
                            },
                            expected: 10
                        };
                        
                        specFor(dragConfig, function(key, value) {
                           describe(key, function() {
                                beforeEach(function() {
                                    setupSlider(value.config);
                                    var xy = thumb0.el.getXY();
                                    jasmine.fireMouseEvent(thumb0.el, 'mousedown', xy[0], xy[1]);
                                    jasmine.fireMouseEvent(thumb0.el, 'mousemove', xy[0], xy[1] - 17);
                                    jasmine.fireMouseEvent(thumb0.el, 'mouseup', xy[0], xy[1] - 17);
                                });

                                it("should call dragstart event", function() {
                                    expect(slider.fireEvent.calls[0].args[0]).toBe("dragstart");
                                    expect(slider.fireEvent.calls[0].args[1]).toBe(slider);
                                    expect(slider.fireEvent.calls[0].args[3]).toBe(thumb0);
                                });
                                
                                it("should fire beforechange event", function() {
                                    expect(slider.fireEvent.calls[1].args[0]).toBe("beforechange");
                                    expect(slider.fireEvent).toHaveBeenCalledWith("beforechange", slider, value.expected, 0, thumb0);
                                });
                                
                                it("should fire change event", function() {
                                    expect(slider.fireEvent.calls[2].args[0]).toBe("change");
                                    expect(slider.fireEvent).toHaveBeenCalledWith("change", slider, value.expected, thumb0);
                                });
                                
                                it("should call drag event", function() {
                                    expect(slider.fireEvent.calls[3].args[0]).toBe("drag");
                                    expect(slider.fireEvent.calls[3].args[1]).toBe(slider);
                                    expect(slider.fireEvent.calls[3].args[3]).toBe(thumb0);
                                });
                                
                                it("should call dragend event", function() {
                                    expect(slider.fireEvent.calls[4].args[0]).toBe("dragend");
                                    expect(slider.fireEvent.calls[4].args[1]).toBe(slider);
                                });
                                
                                it("should fire changecomplete event", function() {
                                    expect(slider.fireEvent.calls[5].args[0]).toBe("changecomplete");
                                    expect(slider.fireEvent).toHaveBeenCalledWith("changecomplete", slider, value.expected, thumb0);
                                });
                            });
                        });
                    });

                    describe("outside thumbs", function() {
                        beforeEach(function() {
                            setupSlider();
                        });
                        
                        describe("if slider enabled", function() {
                            beforeEach(function() {
                                var xy = slider.innerEl.getXY();
                                jasmine.fireMouseEvent(slider.el, 'mousedown', xy[0] + 8 , xy[1] + 100);
                                jasmine.fireMouseEvent(slider.el, 'mouseup', xy[0] + 8, xy[1] + 100);
                                jasmine.fireMouseEvent(slider.el, 'click', xy[0] + 8, xy[1] + 100);
                            });
                            
                            it("should fire beforechange event", function() {
                                expect(slider.fireEvent).toHaveBeenCalledWith("beforechange", slider, 50, 60, thumb60);
                            });
                            
                            it("should fire change event", function() {
                                expect(slider.fireEvent).toHaveBeenCalledWith("change", slider, 50, thumb60);
                            });

                            it("should fire changecomplete event", function() {
                                expect(slider.fireEvent).toHaveBeenCalledWith("changecomplete", slider, 50, thumb60);
                            });

                            it("should change the thumb value", function() {
                                expect(thumb60.value).toEqual(50);
                            });
                        });
                        
                        describe("if slider disabled", function() {
                            beforeEach(function() {
                                slider.disable();
                                var xy = slider.innerEl.getXY();
                                jasmine.fireMouseEvent(slider.el, 'mousedown', xy[0], xy[1] - 93);
                            });

                            it("should not fire any *change* events", function() {
                                var calls = slider.fireEvent.calls,
                                    length = calls.length,
                                    call, i;
                                    
                                for (i = 0; i < length; i++) {
                                    call = calls[i];
                                    expect(call.args[0].search("change")).toEqual(-1);
                                }
                            });

                            it("should not change the thumb value", function() {
                                expect(thumb0.value).toEqual(0);
                            });                        
                        });
                    });
                });
            });
        });
    });

    // TODO: when implemented
    xdescribe("form integration", function() {

    });
});
