module.exports = {
  params: {
    designator: 'S',
    from: undefined,
    to: undefined
  },
  body: p => {
    const standard = `
      (module PG1350_optional_reversible (layer F.Cu) (tedit 5DD50112)
      ${p.at /* parametric position */}

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 -8.89) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.1 1.1) (thickness 0.15))))
      (fp_text value "PG1350" (at 0 8.255) (layer F.Fab) hide (effects (font (size 1.1 1.1) (thickness 0.15))))

      ${''/* lines arcs and texts from original footprint */}
      (fp_line (start -2.6 -3.1) (end 2.6 -3.1) (layer Eco2.User) (width 0.15))
      (fp_line (start 2.6 -3.1) (end 2.6 -6.3) (layer Eco2.User) (width 0.15))
      (fp_line (start 2.6 -6.3) (end -2.6 -6.3) (layer Eco2.User) (width 0.15))
      (fp_line (start -2.6 -3.1) (end -2.6 -6.3) (layer Eco2.User) (width 0.15))
      (fp_line (start -7 -6) (end -7 -7) (layer F.SilkS) (width 0.15))
      (fp_line (start -7 -7) (end -6 -7) (layer F.SilkS) (width 0.15))
      (fp_line (start -6 7) (end -7 7) (layer F.SilkS) (width 0.15))
      (fp_line (start -7 7) (end -7 6) (layer F.SilkS) (width 0.15))
      (fp_line (start 7 6) (end 7 7) (layer F.SilkS) (width 0.15))
      (fp_line (start 7 7) (end 6 7) (layer F.SilkS) (width 0.15))
      (fp_line (start 6 -7) (end 7 -7) (layer F.SilkS) (width 0.15))
      (fp_line (start 7 -7) (end 7 -6) (layer F.SilkS) (width 0.15))
      (fp_line (start -6.9 6.9) (end 6.9 6.9) (layer Eco2.User) (width 0.15))
      (fp_line (start 6.9 -6.9) (end -6.9 -6.9) (layer Eco2.User) (width 0.15))
      (fp_line (start 6.9 -6.9) (end 6.9 6.9) (layer Eco2.User) (width 0.15))
      (fp_line (start -6.9 6.9) (end -6.9 -6.9) (layer Eco2.User) (width 0.15))
      (fp_line (start -7.5 -7.5) (end 7.5 -7.5) (layer B.Fab) (width 0.15))
      (fp_line (start 7.5 -7.5) (end 7.5 7.5) (layer B.Fab) (width 0.15))
      (fp_line (start 7.5 7.5) (end -7.5 7.5) (layer B.Fab) (width 0.15))
      (fp_line (start -7.5 7.5) (end -7.5 -7.5) (layer B.Fab) (width 0.15))
      (fp_line (start -6 7) (end -7 7) (layer B.SilkS) (width 0.15))
      (fp_line (start -7 7) (end -7 6) (layer B.SilkS) (width 0.15))
      (fp_line (start 7 7) (end 6 7) (layer B.SilkS) (width 0.15))
      (fp_line (start 7 6) (end 7 7) (layer B.SilkS) (width 0.15))
      (fp_line (start 6 -7) (end 7 -7) (layer B.SilkS) (width 0.15))
      (fp_line (start 7 -7) (end 7 -6) (layer B.SilkS) (width 0.15))
      (fp_line (start -7 -6) (end -7 -7) (layer B.SilkS) (width 0.15))
      (fp_line (start -7 -7) (end -6 -7) (layer B.SilkS) (width 0.15))
      (fp_line (start 7 -1.5) (end 7 -2) (layer B.SilkS) (width 0.15))
      (fp_arc (start 2.5 -6.7) (end 2 -6.7) (angle -90) (layer B.SilkS) (width 0.15))
      (fp_line (start -1.5 -8.2) (end 1.5 -8.2) (layer B.SilkS) (width 0.15))
      (fp_line (start -2 -7.7) (end -1.5 -8.2) (layer B.SilkS) (width 0.15))
      (fp_line (start -1.5 -3.7) (end 1 -3.7) (layer B.SilkS) (width 0.15))
      (fp_line (start 7 -5.6) (end 7 -6.2) (layer B.SilkS) (width 0.15))
      (fp_line (start -2 -4.2) (end -1.5 -3.7) (layer B.SilkS) (width 0.15))
      (fp_line (start 7 -6.2) (end 2.5 -6.2) (layer B.SilkS) (width 0.15))
      (fp_line (start 2 -6.7) (end 2 -7.7) (layer B.SilkS) (width 0.15))
      (fp_line (start 1.5 -8.2) (end 2 -7.7) (layer B.SilkS) (width 0.15))
      (fp_arc (start 1 -2.2) (end 2.5 -2.2) (angle -90) (layer B.SilkS) (width 0.15))
      (fp_line (start 2.5 -1.5) (end 7 -1.5) (layer B.SilkS) (width 0.15))
      (fp_line (start 2.5 -2.2) (end 2.5 -1.5) (layer B.SilkS) (width 0.15))
      (fp_line (start -7 -1.5) (end -7 -2) (layer F.SilkS) (width 0.15))
      (fp_arc (start -2.5 -6.7) (end -2 -6.7) (angle 90) (layer F.SilkS) (width 0.15))
      (fp_line (start 1.5 -8.2) (end -1.5 -8.2) (layer F.SilkS) (width 0.15))
      (fp_line (start 2 -7.7) (end 1.5 -8.2) (layer F.SilkS) (width 0.15))
      (fp_line (start 1.5 -3.7) (end -1 -3.7) (layer F.SilkS) (width 0.15))
      (fp_line (start -7 -5.6) (end -7 -6.2) (layer F.SilkS) (width 0.15))
      (fp_line (start 2 -4.2) (end 1.5 -3.7) (layer F.SilkS) (width 0.15))
      (fp_line (start -7 -6.2) (end -2.5 -6.2) (layer F.SilkS) (width 0.15))
      (fp_line (start -2 -6.7) (end -2 -7.7) (layer F.SilkS) (width 0.15))
      (fp_line (start -1.5 -8.2) (end -2 -7.7) (layer F.SilkS) (width 0.15))
      (fp_arc (start -1 -2.2) (end -2.5 -2.2) (angle 90) (layer F.SilkS) (width 0.15))
      (fp_line (start -2.5 -1.5) (end -7 -1.5) (layer F.SilkS) (width 0.15))
      (fp_line (start -2.5 -2.2) (end -2.5 -1.5) (layer F.SilkS) (width 0.15))
      (fp_line (start 9.5 -2.5) (end 7 -2.5) (layer B.Fab) (width 0.12))
      (fp_line (start -2 -4.75) (end -4.5 -4.75) (layer B.Fab) (width 0.12))
      (fp_line (start -4.5 -4.75) (end -4.5 -7.25) (layer B.Fab) (width 0.12))
      (fp_line (start -4.5 -7.25) (end -2 -7.25) (layer B.Fab) (width 0.12))
      (fp_line (start 9.5 -5) (end 9.5 -2.5) (layer B.Fab) (width 0.12))
      (fp_line (start -2 -4.25) (end -2 -7.7) (layer B.Fab) (width 0.12))
      (fp_line (start 2.5 -2.2) (end 2.5 -1.5) (layer B.Fab) (width 0.15))
      (fp_line (start 2.5 -1.5) (end 7 -1.5) (layer B.Fab) (width 0.15))
      (fp_arc (start 1 -2.2) (end 2.5 -2.2) (angle -90) (layer B.Fab) (width 0.15))
      (fp_line (start 1.5 -8.2) (end 2 -7.7) (layer B.Fab) (width 0.15))
      (fp_line (start 2 -6.7) (end 2 -7.7) (layer B.Fab) (width 0.15))
      (fp_line (start 7 -6.2) (end 2.5 -6.2) (layer B.Fab) (width 0.15))
      (fp_line (start -2 -4.2) (end -1.5 -3.7) (layer B.Fab) (width 0.15))
      (fp_line (start -1.5 -3.7) (end 1 -3.7) (layer B.Fab) (width 0.15))
      (fp_line (start -2 -7.7) (end -1.5 -8.2) (layer B.Fab) (width 0.15))
      (fp_line (start -1.5 -8.2) (end 1.5 -8.2) (layer B.Fab) (width 0.15))
      (fp_arc (start 2.5 -6.7) (end 2 -6.7) (angle -90) (layer B.Fab) (width 0.15))
      (fp_line (start 7 -1.5) (end 7 -6.2) (layer B.Fab) (width 0.12))
      (fp_line (start 7 -5) (end 9.5 -5) (layer B.Fab) (width 0.12))
      (fp_text user %R (at 3 -5 180) (layer B.Fab)
        (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
      )
      (fp_line (start -9.5 -2.5) (end -7 -2.5) (layer F.Fab) (width 0.12))
      (fp_line (start 2 -4.75) (end 4.5 -4.75) (layer F.Fab) (width 0.12))
      (fp_line (start 4.5 -4.75) (end 4.5 -7.25) (layer F.Fab) (width 0.12))
      (fp_line (start 4.5 -7.25) (end 2 -7.25) (layer F.Fab) (width 0.12))
      (fp_line (start -9.5 -5) (end -9.5 -2.5) (layer F.Fab) (width 0.12))
      (fp_line (start 2 -4.25) (end 2 -7.7) (layer F.Fab) (width 0.12))
      (fp_line (start -2.5 -2.2) (end -2.5 -1.5) (layer F.Fab) (width 0.15))
      (fp_line (start -2.5 -1.5) (end -7 -1.5) (layer F.Fab) (width 0.15))
      (fp_arc (start -1 -2.2) (end -2.5 -2.2) (angle 90) (layer F.Fab) (width 0.15))
      (fp_line (start -1.5 -8.2) (end -2 -7.7) (layer F.Fab) (width 0.15))
      (fp_line (start -2 -6.7) (end -2 -7.7) (layer F.Fab) (width 0.15))
      (fp_line (start -7 -6.2) (end -2.5 -6.2) (layer F.Fab) (width 0.15))
      (fp_line (start 2 -4.2) (end 1.5 -3.7) (layer F.Fab) (width 0.15))
      (fp_line (start 1.5 -3.7) (end -1 -3.7) (layer F.Fab) (width 0.15))
      (fp_line (start 2 -7.7) (end 1.5 -8.2) (layer F.Fab) (width 0.15))
      (fp_line (start 1.5 -8.2) (end -1.5 -8.2) (layer F.Fab) (width 0.15))
      (fp_arc (start -2.5 -6.7) (end -2 -6.7) (angle 90) (layer F.Fab) (width 0.15))
      (fp_line (start -7 -1.5) (end -7 -6.2) (layer F.Fab) (width 0.12))
      (fp_line (start -7 -5) (end -9.5 -5) (layer F.Fab) (width 0.12))
      (fp_text user %R (at -2.25 -4.75) (layer F.Fab)
        (effects (font (size 1 1) (thickness 0.15)))
      )
      (fp_text user %R (at 0 -8.89) (layer B.SilkS)
        (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
      )
      (fp_text user %V (at 0 8.255) (layer B.Fab)
        (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
      )
      (fp_line (start -7.5 -7.5) (end 7.5 -7.5) (layer F.Fab) (width 0.15))
      (fp_line (start 7.5 -7.5) (end 7.5 7.5) (layer F.Fab) (width 0.15))
      (fp_line (start 7.5 7.5) (end -7.5 7.5) (layer F.Fab) (width 0.15))
      (fp_line (start -7.5 7.5) (end -7.5 -7.5) (layer F.Fab) (width 0.15))
      
      ${''/* pads */}
      (pad 2 thru_hole circle (at -5 3.8) (size 2.032 2.032) (drill 1.27) (layers *.Cu *.Mask) ${p.to})
      (pad 2 smd rect (at 8.275 -3.75 ${p.r}) (size 2.6 2.6) (layers B.Cu B.Paste B.Mask) ${p.to})
      (pad 1 smd rect (at -3.275 -5.95  ${p.r}) (size 2.6 2.6) (layers B.Cu B.Paste B.Mask) ${p.from})
      (pad "" np_thru_hole circle (at 5 -3.75) (size 3 3) (drill 3) (layers *.Cu *.Mask))
      (pad 2 smd rect (at -8.275 -3.75  ${p.r}) (size 2.6 2.6) (layers F.Cu F.Paste F.Mask) ${p.to})
      (pad "" np_thru_hole circle (at 0 -5.95) (size 3 3) (drill 3) (layers *.Cu *.Mask))
      (pad 1 thru_hole circle (at 0 5.9) (size 2.032 2.032) (drill 1.27) (layers *.Cu *.Mask) ${p.from})
      (pad 2 thru_hole circle (at 5 3.8) (size 2.032 2.032) (drill 1.27) (layers *.Cu *.Mask) ${p.to})
      (pad "" np_thru_hole circle (at 0 0) (size 3.429 3.429) (drill 3.429) (layers *.Cu *.Mask))
      (pad "" np_thru_hole circle (at -5 -3.75) (size 3 3) (drill 3) (layers *.Cu *.Mask))
      (pad 1 smd rect (at 3.275 -5.95  ${p.r}) (size 2.6 2.6) (layers F.Cu F.Paste F.Mask) ${p.from})
      (pad "" np_thru_hole circle (at 5.5 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask))
      (pad "" np_thru_hole circle (at -5.5 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask))
      `
    const keycap = `
      ${'' /* keycap marks */}
      (fp_line (start -9 -8.5) (end 9 -8.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start 9 -8.5) (end 9 8.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start 9 8.5) (end -9 8.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start -9 8.5) (end -9 -8.5) (layer Dwgs.User) (width 0.15))
      `
    function pins(def_neg, def_pos, def_side) {
      if(p.hotswap) {
        return `
          ${'' /* holes */}
          (pad "" np_thru_hole circle (at ${def_pos}5 -3.75) (size 3 3) (drill 3) (layers *.Cu *.Mask))
          (pad "" np_thru_hole circle (at 0 -5.95) (size 3 3) (drill 3) (layers *.Cu *.Mask))
      
          ${'' /* net pads */}
          (pad 1 smd rect (at ${def_neg}3.275 -5.95 ${p.r}) (size 2.6 2.6) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask)  ${p.from})
          (pad 2 smd rect (at ${def_pos}8.275 -3.75 ${p.r}) (size 2.6 2.6) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask)  ${p.to})
        `
      } else {
          return `
            ${''/* pins */}
            (pad 1 thru_hole circle (at ${def_pos}5 -3.8) (size 2.032 2.032) (drill 1.27) (layers *.Cu *.Mask) ${p.from})
            (pad 2 thru_hole circle (at ${def_pos}0 -5.9) (size 2.032 2.032) (drill 1.27) (layers *.Cu *.Mask) ${p.to})
          `
      }
    }
 //   if(p.reverse) {
 //     return `
 //       ${standard}
 //       ${p.keycaps ? keycap : ''}
 //       ${pins('-', '', 'B')}
 //       ${pins('', '-', 'F')})
 //       `
 //   } else {
      return `
        ${standard}
        ${p.keycaps ? keycap : ''}
        ${pins('-', '', 'B')})
        `
//    }
  }
}
