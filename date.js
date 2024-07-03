const { exec } = require('child_process');
const fs = require('fs').promises;

// Function to execute Git commands
function gitCommand(command) {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing command: ${command}`);
                console.error(`stderr: ${stderr}`);
                reject(error);
                return;
            }
            console.log(`stdout: ${stdout}`);
            resolve(stdout.trim());
        });
    });
}

// Function to generate dates
function generateDates() {
    const dates = [];
    const months = [3]; // April and May
    const days = [24];

    for (const month of months) {
        for (const day of days) {
            if (month === 4 && day > 30) continue; // April has 30 days
            dates.push(`2024-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}T12:00:00`);
        }
    }
    return dates;
}

// Function to read and modify a file
async function readFileAndModify(filePath, content) {
    try {
        await fs.writeFile(filePath, content, 'utf8');
    } catch (error) {
        console.error(`Error writing to file: ${filePath}`);
        throw error;
    }
}

async function commitAndPushToGit() {
    const dates = generateDates();
    const filePath = './your-file.txt'; // Specify the file path

    try {
        // Change directory to your Git repository
        process.chdir('./');

        for (const commitDate of dates) {
            // Modify the file content
            await readFileAndModify(filePath, `Content for ${commitDate}`);

            // Add files to staging area
            await gitCommand('git add .');

            // Commit with custom date
            await gitCommand(`git commit --date="${commitDate}" -m "Commit for ${commitDate}"`);
        }

        // Push changes to remote repository
        await gitCommand('git push');

        console.log('All commits and push successful!');
    } catch (error) {
        console.error('Error committing to Git:', error);
    }
}

// Call the function to commit and push
commitAndPushToGit();