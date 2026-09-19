import { personalInfo, projectsData, skillsData, journeyPhases } from './portfolioData';

export interface CommandOutput {
  type: 'text' | 'success' | 'warning' | 'info' | 'error' | 'table' | 'clear';
  content: string | string[];
}

export function executeTerminalCommand(input: string, onToggleTheme?: () => void): CommandOutput {
  const cleanInput = input.trim().toLowerCase();
  const args = cleanInput.split(' ');
  const command = args[0];

  switch (command) {
    case 'help':
      return {
        type: 'info',
        content: [
          'Available Commands:',
          '  whoami       - Display identity and academic status',
          '  about        - Short professional overview & philosophy',
          '  projects     - List all featured software & AI projects',
          '  skills       - Show technical proficiency by category',
          '  journey      - View 7-phase engineering learning path',
          '  hackathon    - View Smart India Hackathon project details',
          '  contact      - Display communication channels and social links',
          '  resume       - View resume download link and details',
          '  theme        - Toggle between Dark and Light mode',
          '  clear        - Clear the terminal console output',
          '  date         - Print current system date and time'
        ]
      };

    case 'whoami':
      return {
        type: 'success',
        content: [
          `Name:        ${personalInfo.name}`,
          `Status:      ${personalInfo.education}`,
          `Role:        ${personalInfo.role}`,
          `Location:    ${personalInfo.location}`,
          `Philosophy:  "Building practical applications connecting AI, software, and the physical world."`
        ]
      };

    case 'about':
      return {
        type: 'text',
        content: [
          personalInfo.shortBio,
          '',
          personalInfo.extendedBio
        ]
      };

    case 'projects':
      return {
        type: 'text',
        content: [
          'Featured Projects:',
          ...projectsData.map(
            (p, i) => `  [${i + 1}] ${p.name.padEnd(24)} | Status: ${p.status.padEnd(14)} | ${p.category}`
          ),
          '',
          'Tip: Scroll up to the Featured Projects section to test interactive simulators & details.'
        ]
      };

    case 'skills':
      return {
        type: 'text',
        content: [
          'Technical Stack & Ecosystem:',
          ...skillsData.map(cat => 
            `  * ${cat.name.padEnd(14)}: ${cat.skills.map(s => s.name).join(', ')}`
          )
        ]
      };

    case 'journey':
      return {
        type: 'info',
        content: [
          'Development Milestones Roadmap:',
          ...journeyPhases.map(p => `  Phase ${p.phase}: ${p.title} (${p.period})`)
        ]
      };

    case 'hackathon':
      return {
        type: 'success',
        content: [
          '🏆 Smart India Hackathon (SIH) Showcase:',
          '  Project: QuantumLearn',
          '  Category: AI + Quantum Computing + Education',
          '  Description: Synchronized circuit builder, Qiskit simulation, statevector analysis, and Socratic AI mentor for quantum algorithms.'
        ]
      };

    case 'contact':
      return {
        type: 'info',
        content: [
          'Connect with Kaviraj R:',
          `  Email:    ${personalInfo.socials.emailRaw}`,
          `  GitHub:   ${personalInfo.socials.github}`,
          `  LinkedIn: ${personalInfo.socials.linkedin}`,
          `  Location: ${personalInfo.location}`
        ]
      };

    case 'resume':
      return {
        type: 'text',
        content: [
          'Resume Document:',
          `  Local PDF:    ${personalInfo.socials.resumePdf}`,
          `  Google Drive: ${personalInfo.socials.resumeDrive}`,
          '  Status: Ready for download or direct Google Drive inspection.'
        ]
      };

    case 'theme':
      if (onToggleTheme) {
        onToggleTheme();
        return {
          type: 'success',
          content: 'Theme toggled successfully!'
        };
      }
      return {
        type: 'info',
        content: 'Theme toggler available in the navigation bar or via Ctrl+K command palette.'
      };

    case 'clear':
      return {
        type: 'clear',
        content: ''
      };

    case 'date':
      return {
        type: 'text',
        content: new Date().toUTCString()
      };

    case '':
      return {
        type: 'text',
        content: ''
      };

    default:
      return {
        type: 'error',
        content: `Command not found: "${command}". Type "help" to see available developer commands.`
      };
  }
}
