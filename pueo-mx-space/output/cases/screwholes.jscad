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
            
            
        
            function main() {
                return screwholes_case_fn();
            }

        