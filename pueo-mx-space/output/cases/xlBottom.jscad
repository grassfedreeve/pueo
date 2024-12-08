function _xlpanel_extrude_1_outline_fn(){
    return new CSG.Path2D([[116.9593668,-84.1998545],[186.442933,-84.1998545]]).appendPoint([185.2462629,-87.4876786]).appendPoint([212.4700978,-97.3963441]).appendPoint([218.7974705,-80.0120306]).appendPoint([212.6593668,-77.7779436]).appendPoint([212.6593668,-19.9498545]).appendArc([212.1593668,-19.4498545],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([157.3718668,-19.4498545]).appendPoint([157.3718668,-16.4748545]).appendPoint([139.3718668,-16.4748545]).appendPoint([139.3718668,-19.4498545]).appendPoint([116.9593668,-19.4498545]).appendArc([116.4593668,-19.9498545],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([116.4593668,-57.85503]).appendPoint([100.3436172,-60.1199509]).appendPoint([102.848733,-77.9447761]).appendPoint([116.4593668,-76.0319263]).appendPoint([116.4593668,-83.6998545]).appendArc([116.9593668,-84.1998545],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function xlBottom_case_fn() {
                    

                // creating part 0 of case xlBottom
                let xlBottom__part_0 = _xlpanel_extrude_1_outline_fn();

                // make sure that rotations are relative
                let xlBottom__part_0_bounds = xlBottom__part_0.getBounds();
                let xlBottom__part_0_x = xlBottom__part_0_bounds[0].x + (xlBottom__part_0_bounds[1].x - xlBottom__part_0_bounds[0].x) / 2
                let xlBottom__part_0_y = xlBottom__part_0_bounds[0].y + (xlBottom__part_0_bounds[1].y - xlBottom__part_0_bounds[0].y) / 2
                xlBottom__part_0 = translate([-xlBottom__part_0_x, -xlBottom__part_0_y, 0], xlBottom__part_0);
                xlBottom__part_0 = rotate([0,0,0], xlBottom__part_0);
                xlBottom__part_0 = translate([xlBottom__part_0_x, xlBottom__part_0_y, 0], xlBottom__part_0);

                xlBottom__part_0 = translate([0,0,0], xlBottom__part_0);
                let result = xlBottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return xlBottom_case_fn();
            }

        