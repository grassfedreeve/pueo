function _panel_extrude_4_outline_fn(){
    return new CSG.Path2D([[105.4742933,-97.9825988],[175.0721036,-107.7639333]]).appendPoint([172.6566531,-112.306735]).appendPoint([196.1624839,-124.8050069]).appendPoint([204.1435005,-109.7948978]).appendPoint([200.7111691,-107.9698948]).appendPoint([208.6977134,-51.1426795]).appendArc([208.2721658,-50.577959],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([152.4086684,-42.7268563]).appendPoint([152.9827574,-38.6420006]).appendPoint([136.1482003,-36.2760579]).appendPoint([135.5741112,-40.3609136]).appendPoint([113.9986457,-37.3286796]).appendArc([113.4339252,-37.7542272],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([108.339914,-74]).appendPoint([91.5,-74]).appendPoint([91.5,-91]).appendPoint([105.9507198,-91]).appendPoint([105.0487458,-97.4178783]).appendArc([105.4742934,-97.9825988],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 4] });
}




                function panel_case_fn() {
                    

                // creating part 0 of case panel
                let panel__part_0 = _panel_extrude_4_outline_fn();

                // make sure that rotations are relative
                let panel__part_0_bounds = panel__part_0.getBounds();
                let panel__part_0_x = panel__part_0_bounds[0].x + (panel__part_0_bounds[1].x - panel__part_0_bounds[0].x) / 2
                let panel__part_0_y = panel__part_0_bounds[0].y + (panel__part_0_bounds[1].y - panel__part_0_bounds[0].y) / 2
                panel__part_0 = translate([-panel__part_0_x, -panel__part_0_y, 0], panel__part_0);
                panel__part_0 = rotate([0,0,0], panel__part_0);
                panel__part_0 = translate([panel__part_0_x, panel__part_0_y, 0], panel__part_0);

                panel__part_0 = translate([0,0,0], panel__part_0);
                let result = panel__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return panel_case_fn();
            }

        