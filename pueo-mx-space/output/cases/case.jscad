function standoff_extrude_4_outline_fn(){
    return CAG.circle({"center":[196.8718668,-25.0998545],"radius":2.5})
.union(
    CAG.circle({"center":[207.8718668,-77.0998545],"radius":2.5})
).union(
    CAG.circle({"center":[119.8210701,-77.0576199],"radius":2.5})
).union(
    CAG.circle({"center":[138.3114226,-29.8723745],"radius":2.5})
).extrude({ offset: [0, 0, 4] });
}


function mounting_extrude_4_outline_fn(){
    return CAG.circle({"center":[196.8718668,-25.0998545],"radius":1.5})
.union(
    CAG.circle({"center":[207.8718668,-77.0998545],"radius":1.5})
).union(
    CAG.circle({"center":[119.8210701,-77.0576199],"radius":1.5})
).union(
    CAG.circle({"center":[138.3114226,-29.8723745],"radius":1.5})
).extrude({ offset: [0, 0, 4] });
}


function _xlpanel_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[116.9593668,-84.1998545],[186.442933,-84.1998545]]).appendPoint([185.2462629,-87.4876786]).appendPoint([212.4700978,-97.3963441]).appendPoint([218.7974705,-80.0120306]).appendPoint([212.6593668,-77.7779436]).appendPoint([212.6593668,-19.9498545]).appendArc([212.1593668,-19.4498545],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([157.3718668,-19.4498545]).appendPoint([157.3718668,-16.4748545]).appendPoint([139.3718668,-16.4748545]).appendPoint([139.3718668,-19.4498545]).appendPoint([116.9593668,-19.4498545]).appendArc([116.4593668,-19.9498545],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([116.4593668,-57.85503]).appendPoint([100.3436172,-60.1199509]).appendPoint([102.848733,-77.9447761]).appendPoint([116.4593668,-76.0319263]).appendPoint([116.4593668,-83.6998545]).appendArc([116.9593668,-84.1998545],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5.6] });
}


function _panel_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[118.0843668,-82.3498545],[188.3661547,-82.3498545]]).appendPoint([186.606447,-87.1846117]).appendPoint([211.622944,-96.289872]).appendPoint([217.4372864,-80.3150975]).appendPoint([213.7843668,-78.9855435]).appendPoint([213.7843668,-21.5998545]).appendArc([213.2843668,-21.0998545],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([156.8718668,-21.0998545]).appendPoint([156.8718668,-16.9748545]).appendPoint([139.8718668,-16.9748545]).appendPoint([139.8718668,-21.0998545]).appendPoint([118.0843668,-21.0998545]).appendArc([117.5843668,-21.5998545],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([117.5843668,-58.2018354]).appendPoint([100.9083378,-60.5454984]).appendPoint([103.2742805,-77.3800555]).appendPoint([117.5843668,-75.368904]).appendPoint([117.5843668,-81.8498545]).appendArc([118.0843668,-82.3498545],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5.6] });
}




                function standoffs_case_fn() {
                    

                // creating part 0 of case standoffs
                let standoffs__part_0 = standoff_extrude_4_outline_fn();

                // make sure that rotations are relative
                let standoffs__part_0_bounds = standoffs__part_0.getBounds();
                let standoffs__part_0_x = standoffs__part_0_bounds[0].x + (standoffs__part_0_bounds[1].x - standoffs__part_0_bounds[0].x) / 2
                let standoffs__part_0_y = standoffs__part_0_bounds[0].y + (standoffs__part_0_bounds[1].y - standoffs__part_0_bounds[0].y) / 2
                standoffs__part_0 = translate([-standoffs__part_0_x, -standoffs__part_0_y, 0], standoffs__part_0);
                standoffs__part_0 = rotate([0,0,0], standoffs__part_0);
                standoffs__part_0 = translate([standoffs__part_0_x, standoffs__part_0_y, 0], standoffs__part_0);

                standoffs__part_0 = translate([0,0,0], standoffs__part_0);
                let result = standoffs__part_0;
                
            
                    return result;
                }
            
            

                function screwholes_case_fn() {
                    

                // creating part 0 of case screwholes
                let screwholes__part_0 = mounting_extrude_4_outline_fn();

                // make sure that rotations are relative
                let screwholes__part_0_bounds = screwholes__part_0.getBounds();
                let screwholes__part_0_x = screwholes__part_0_bounds[0].x + (screwholes__part_0_bounds[1].x - screwholes__part_0_bounds[0].x) / 2
                let screwholes__part_0_y = screwholes__part_0_bounds[0].y + (screwholes__part_0_bounds[1].y - screwholes__part_0_bounds[0].y) / 2
                screwholes__part_0 = translate([-screwholes__part_0_x, -screwholes__part_0_y, 0], screwholes__part_0);
                screwholes__part_0 = rotate([0,0,0], screwholes__part_0);
                screwholes__part_0 = translate([screwholes__part_0_x, screwholes__part_0_y, 0], screwholes__part_0);

                screwholes__part_0 = translate([0,0,0], screwholes__part_0);
                let result = screwholes__part_0;
                
            
                    return result;
                }
            
            

                function _outerWall_case_fn() {
                    

                // creating part 0 of case _outerWall
                let _outerWall__part_0 = _xlpanel_extrude_5_6_outline_fn();

                // make sure that rotations are relative
                let _outerWall__part_0_bounds = _outerWall__part_0.getBounds();
                let _outerWall__part_0_x = _outerWall__part_0_bounds[0].x + (_outerWall__part_0_bounds[1].x - _outerWall__part_0_bounds[0].x) / 2
                let _outerWall__part_0_y = _outerWall__part_0_bounds[0].y + (_outerWall__part_0_bounds[1].y - _outerWall__part_0_bounds[0].y) / 2
                _outerWall__part_0 = translate([-_outerWall__part_0_x, -_outerWall__part_0_y, 0], _outerWall__part_0);
                _outerWall__part_0 = rotate([0,0,0], _outerWall__part_0);
                _outerWall__part_0 = translate([_outerWall__part_0_x, _outerWall__part_0_y, 0], _outerWall__part_0);

                _outerWall__part_0 = translate([0,0,0], _outerWall__part_0);
                let result = _outerWall__part_0;
                
            
                    return result;
                }
            
            

                function _innerWall_case_fn() {
                    

                // creating part 0 of case _innerWall
                let _innerWall__part_0 = _panel_extrude_5_6_outline_fn();

                // make sure that rotations are relative
                let _innerWall__part_0_bounds = _innerWall__part_0.getBounds();
                let _innerWall__part_0_x = _innerWall__part_0_bounds[0].x + (_innerWall__part_0_bounds[1].x - _innerWall__part_0_bounds[0].x) / 2
                let _innerWall__part_0_y = _innerWall__part_0_bounds[0].y + (_innerWall__part_0_bounds[1].y - _innerWall__part_0_bounds[0].y) / 2
                _innerWall__part_0 = translate([-_innerWall__part_0_x, -_innerWall__part_0_y, 0], _innerWall__part_0);
                _innerWall__part_0 = rotate([0,0,0], _innerWall__part_0);
                _innerWall__part_0 = translate([_innerWall__part_0_x, _innerWall__part_0_y, 0], _innerWall__part_0);

                _innerWall__part_0 = translate([0,0,0], _innerWall__part_0);
                let result = _innerWall__part_0;
                
            
                    return result;
                }
            
            

                function case_case_fn() {
                    

                // creating part 0 of case case
                let case__part_0 = standoffs_case_fn();

                // make sure that rotations are relative
                let case__part_0_bounds = case__part_0.getBounds();
                let case__part_0_x = case__part_0_bounds[0].x + (case__part_0_bounds[1].x - case__part_0_bounds[0].x) / 2
                let case__part_0_y = case__part_0_bounds[0].y + (case__part_0_bounds[1].y - case__part_0_bounds[0].y) / 2
                case__part_0 = translate([-case__part_0_x, -case__part_0_y, 0], case__part_0);
                case__part_0 = rotate([0,0,0], case__part_0);
                case__part_0 = translate([case__part_0_x, case__part_0_y, 0], case__part_0);

                case__part_0 = translate([0,0,0], case__part_0);
                let result = case__part_0;
                
            

                // creating part 1 of case case
                let case__part_1 = screwholes_case_fn();

                // make sure that rotations are relative
                let case__part_1_bounds = case__part_1.getBounds();
                let case__part_1_x = case__part_1_bounds[0].x + (case__part_1_bounds[1].x - case__part_1_bounds[0].x) / 2
                let case__part_1_y = case__part_1_bounds[0].y + (case__part_1_bounds[1].y - case__part_1_bounds[0].y) / 2
                case__part_1 = translate([-case__part_1_x, -case__part_1_y, 0], case__part_1);
                case__part_1 = rotate([0,0,0], case__part_1);
                case__part_1 = translate([case__part_1_x, case__part_1_y, 0], case__part_1);

                case__part_1 = translate([0,0,0], case__part_1);
                result = result.subtract(case__part_1);
                
            

                // creating part 2 of case case
                let case__part_2 = _outerWall_case_fn();

                // make sure that rotations are relative
                let case__part_2_bounds = case__part_2.getBounds();
                let case__part_2_x = case__part_2_bounds[0].x + (case__part_2_bounds[1].x - case__part_2_bounds[0].x) / 2
                let case__part_2_y = case__part_2_bounds[0].y + (case__part_2_bounds[1].y - case__part_2_bounds[0].y) / 2
                case__part_2 = translate([-case__part_2_x, -case__part_2_y, 0], case__part_2);
                case__part_2 = rotate([0,0,0], case__part_2);
                case__part_2 = translate([case__part_2_x, case__part_2_y, 0], case__part_2);

                case__part_2 = translate([0,0,0], case__part_2);
                result = result.union(case__part_2);
                
            

                // creating part 3 of case case
                let case__part_3 = _innerWall_case_fn();

                // make sure that rotations are relative
                let case__part_3_bounds = case__part_3.getBounds();
                let case__part_3_x = case__part_3_bounds[0].x + (case__part_3_bounds[1].x - case__part_3_bounds[0].x) / 2
                let case__part_3_y = case__part_3_bounds[0].y + (case__part_3_bounds[1].y - case__part_3_bounds[0].y) / 2
                case__part_3 = translate([-case__part_3_x, -case__part_3_y, 0], case__part_3);
                case__part_3 = rotate([0,0,0], case__part_3);
                case__part_3 = translate([case__part_3_x, case__part_3_y, 0], case__part_3);

                case__part_3 = translate([0,0,0], case__part_3);
                result = result.subtract(case__part_3);
                
            
                    return result;
                }
            
            
        
            function main() {
                return case_case_fn();
            }

        