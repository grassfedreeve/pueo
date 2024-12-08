function _panel_extrude_1_outline_fn(){
    return new CSG.Path2D([[118.0843668,-82.3498545],[188.3661547,-82.3498545]]).appendPoint([186.606447,-87.1846117]).appendPoint([211.622944,-96.289872]).appendPoint([217.4372864,-80.3150975]).appendPoint([213.7843668,-78.9855435]).appendPoint([213.7843668,-21.5998545]).appendArc([213.2843668,-21.0998545],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([156.8718668,-21.0998545]).appendPoint([156.8718668,-16.9748545]).appendPoint([139.8718668,-16.9748545]).appendPoint([139.8718668,-21.0998545]).appendPoint([118.0843668,-21.0998545]).appendArc([117.5843668,-21.5998545],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([117.5843668,-58.2018354]).appendPoint([100.9083378,-60.5454984]).appendPoint([103.2742805,-77.3800555]).appendPoint([117.5843668,-75.368904]).appendPoint([117.5843668,-81.8498545]).appendArc([118.0843668,-82.3498545],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function bottom_case_fn() {
                    

                // creating part 0 of case bottom
                let bottom__part_0 = _panel_extrude_1_outline_fn();

                // make sure that rotations are relative
                let bottom__part_0_bounds = bottom__part_0.getBounds();
                let bottom__part_0_x = bottom__part_0_bounds[0].x + (bottom__part_0_bounds[1].x - bottom__part_0_bounds[0].x) / 2
                let bottom__part_0_y = bottom__part_0_bounds[0].y + (bottom__part_0_bounds[1].y - bottom__part_0_bounds[0].y) / 2
                bottom__part_0 = translate([-bottom__part_0_x, -bottom__part_0_y, 0], bottom__part_0);
                bottom__part_0 = rotate([0,0,0], bottom__part_0);
                bottom__part_0 = translate([bottom__part_0_x, bottom__part_0_y, 0], bottom__part_0);

                bottom__part_0 = translate([0,0,0], bottom__part_0);
                let result = bottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_fn();
            }

        