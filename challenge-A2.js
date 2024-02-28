const alternatingSums = (a) => {
    let totalTeam1;
    let totalTeam2;
    for (let i = 0; i < a.length; i++) {
        if (i % 2 !== 0) {
            totalTeam1 += a[i];
        } else {
            totalTeam2 += a[i];
        }
    }
    return [totalTeam1, totalTeam2];
};
