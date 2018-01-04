const pairs = { A: 'T', T: 'A', G: 'C', C: 'G' }

function DNAStrand(dna){
    return dna.replace(/./g, (l) => pairs[l])
}