# Process for Approving Open Source Submissions

This document details the process the Open Source Office follows to approve
open source approval submissions that get filed as issues in this repository.
This document is intended for Open Source Office members and aims at formalizing
the approval requirements. Open source approval submitters may find this document
informative in order to gain insight into the approval process.

Submissions fall under three categories:

1. **Personal contributions**: contributions employees will make while _not_
   working on Adobe time or hardware.
2. **Community contributions**: contributions employees will make while working
   on Adobe time to non-Adobe-owned open source projects.
3. **Company contributions**: open sourcing a project that was born at Adobe /
   Magento.

Each submission category follows a different approval process, but there are
common steps needed for all submission types as well.

The bottom of this document also details [post-approval](#post-approval-steps)
as well as [post-rejection steps](#post-rejection-steps).

## Approval Steps for All Submission Categories

1. Since the Open Source Office is composed of many people, first thing is to
   assign the issue to yourself, to make sure multiple people aren't working on
   on the same submission at the same time!
2. Ensure you add the issue to the [Submission Approvals
   project](https://git.corp.adobe.com/OpenSourceAdvisoryBoard/opensource_submission_process/projects/1)
   that exists under the [opensource_submission_process
   repo](https://git.corp.adobe.com/OpenSourceAdvisoryBoard/opensource_submission_process).
3. Ensure there would be no potential [conflict of interest](https://inside.corp.adobe.com/integrity/conflicts-of-interest.html)
   if the employee were to contribute to the project.
   - If the project in question is an XD Plugin, we should ping the `@OpenSourceAdvisoryBoard/xd`
     team to confirm that there is no conflict of interest. For now, XD doesn't
     want Adobe employees to be releasing plugins that compete with plugins that
     our partners are working on.

## Personal Contributions

- Does this seem like a conflict of interest? If so, reply stating that they need to reach out to their manager regarding a review/approval for this project.
   - Does this project involve AI/ML? If so, please reach out to our legal council volunteers via Grp-opensourcelegal <opensourcelegal@adobe.com> for further review.
- No further steps needed for 99.9% of personal contributions! We only check for
conflict of interest. In rare cases, an Adobe employee may seek to open source
code written at and by Adobe under their own person/account. There are many
additional requirements that come under this scenario, take a look at the
[section in this document on the topic for more
details](#releasing-adobe-code-to-individuals).
- **Open Source Office reviewers** please note: we do not log _Personal Contributions_
in the `approvelist.json` file. If a personal contribution is approved, just note it in
the submission issue and close it. No further tracking is required.

## Community Contributions

- Does this project involve AI/ML? If so, please reach out to our legal council volunteers via Grp-opensourcelegal <opensourcelegal@adobe.com> for further review.
- Uses an [approved license](#approved-licenses).
- If contributing to an Apache Software Foundation project, make sure to ask them
  to include their username on the [Apache People at Adobe wiki](https://wiki.corp.adobe.com/display/apache/Apache+People+at+Adobe).
- Be alert for a Developer Certificate of Origin (DCO) or equivalent. As of 15 September 2020,
  Adobe Legal has given general approval for community contributions that require
  [this particular DCO](https://developercertificate.org/), but carefully check in case there
  is some variation. If in doubt, ask!
- Contributors License Agreement:
  - If the project requires a Contributors License Agreement to be signed first check our [list of approved CLA's](https://git.corp.adobe.com/OpenSourceAdvisoryBoard/os_lists/blob/master/src/claLists.js) and follow the instructions to get the contributed added to the CLA. If the CLA doesn't appear on our approved list please flag it with our legal team for review before approving this project.
  - If the project has a CCLA available and we expect more than a few Adobe contributors to the project, a CCLA (Corporate CLA) is helpful to get signed and cover all Adobe employees. First, our volunteer legal team will need to review & approve. Next, a Sr. Director+ with knowledge of the project or subject matter will need to be an authorized signer on behalf of Adobe. Once they sign the CCLA, please add it into our [list of approved CLA's](https://git.corp.adobe.com/OpenSourceAdvisoryBoard/os_lists/blob/master/src/claLists.js), as well as the signed document into the [CCLA folder](https://git.corp.adobe.com/OpenSourceAdvisoryBoard/os_lists/tree/master/CCLAs).

## Company Contributions

- Does this project involve AI/ML? If so, please reach out to our legal council volunteers via Grp-opensourcelegal <opensourcelegal@adobe.com> for further review.
- Has the to-be-open-sourced project data housed in an in-house (git.corp.adobe.com) repo
  with permissions sufficient for the Open Source Office to review prior to creating
  a repo on public GitHub.
- Uses an [approved license](#approved-licenses).
  - If this is a Magento project using the OSL-3.0 license, also include the Magento [`COPYING.txt`](https://github.com/magento/magento2/blob/2.4-develop/COPYING.txt)
  - Note that it is common for Rust projects to use dual licensing (MIT + Apache) and such projects should include LICENSE files for both.
- Uses an [approved code of conduct](#approved-code-of-conduct).
- Has this project been submitted for an Open Source and Source Code Release Request to the patent team to review on Lecorpio (https://adobe.lecorpio.com/)?
- Has appropriate license headers in place, which is dependent on the license
  the project uses:
  - If the Apache license is used, ensure contains license headers denoting Adobe's
    copyright. [Starter repo has a license header template](https://github.com/adobe/starter-repo/blob/master/LICENSE_HEADER.md#apache-v2)
    you can use for Apache V2 licensed projects.
  - If this is a Magento project, the OSL license should be used. [Starter repo
    has a license header template](https://github.com/adobe/starter-repo/blob/master/LICENSE_HEADER.md#magento-projects)
    you can use for Magento + OSL licensed projects.
  - All other licenses still need a copyright header. [Starter repo has a copyright
    header template](https://github.com/adobe/starter-repo/blob/master/LICENSE_HEADER.md#other-licenses)
    you can use for this.
- Contribution guidelines must be in place:
  - If this is an Adobe project, direct them to use our [template
    guidelines](https://github.com/adobe/starter-repo/blob/master/.github/CONTRIBUTING.md).
    The important part is that it calls out the need to sign Adobe's CLA.
  - If this is a Magento project, make sure contributing guidelines that
    roughly match the [Magento2 repo's](https://github.com/magento/magento2/blob/2.3/.github/CONTRIBUTING.md)
    is in place. Note that each project may customize theirs a little bit to
    match the conventions of the project.
- Ensure the desired location of source code hosting (e.g. GitHub) is inside an
  organization that is tracked by the Open Source Office in our [`os_lists` project's
  `adobe-orgs.json`](https://git.corp.adobe.com/OpenSourceAdvisoryBoard/os_lists/blob/master/src/adobe-orgs.json).
  - Suggest to house under [github.com/adobe](https://github.com/adobe) in order
    to build a unified developer brand. If the project is documentation,
    consider using [github.com/AdobeDocs](https://github.com/adobedocs).
    Magento projects should instead exist under [github.com/magento](https://github.com/magento)
- If the repo includes its own `CONTRIBUTING`, `CODE_OF_CONDUCT`, or other boilerplate that will override the inherited [Adobe org-level versions](https://github.com/adobe/.github), ensure that they contain appropriate language.
- Is the project being released a machine learning dataset? If so, then
  ask/determine the following:
  - How did we get the dataset?
  - Licenses for datasets are usually different than open source licenses;
    involve Open Source Office legal council. Possible follow-up questions:
    - Do we have the right to distribute the dataset? If yes, how (probably
      based on license)?
    - **TODO**: create a recommendation for what license to use for datasets
      if this becomes a recurring request.
- Is the project being released an XD plugin? If so:
  - We should look at adding the plugin to the [AdobeXD GitHub Org](https://github.com/adobexd).
    Ping the `@OpenSourceAdvisoryBoard/xd` team for new submissions so they
    can do a conflict of interest check. We also recommend that they follow the
    [open source project naming conventions](https://git.corp.adobe.com/OpenSourceAdvisoryBoard/handbook/blob/master/Naming.md).
- Is the project open sourcing documentation? If so, extra topics to bring up:
  - If they want to have the docs display on [adobe.io](https://adobe.io),
    ping @wex.
  - Do they plan on this repo being the source of truth for their documentation?
    Or do they plan on mirroring from a GitCorp repo? If mirroring, do they have
    an automated way to do this (e.g. Jenkins script)?
  - Do they have a need for staging content or creating private/sensitive information
    that can't be shared publicly? Encourage them to use branches and internal
    forks.
  - If teams want to do a pre-release program with their docs, we can set them
    up with a private repo on the [Adobe GitHub Organization](https://github.com/Adobe).
    The point of the pre-release program is to be able to share the docs with
    select partners to get feedback before sharing the information to the general
    public. Partners can be added as collaborators to the private repo so they
    can file issues and send pull requests. We need to be given a firm date when
    the pre-release program will end and the repo will go public as we have a
    limited amount of private repos.
- Does this project use inclusive language?
  - Scan through the code looking for terms like "whitelist/blacklist" or "master/slave". If instances of these terms exist then suggest [alternatives](https://datatracker.ietf.org/doc/draft-knodel-terminology/). Ensure any branch names do not include the aforementioned terms as well.
- Upon approval, advise the submitter of these recommendations about hardening GitHub Actions: https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions

## Approved Licenses

The following is a list of legal-approved licenses when contributing to community
projects or when open sourcing a new Adobe project. More information on these licenses
and the particular terms under which they can be used can be found on the Legal Wiki's
[Open Source Guidelines](https://wiki.corp.adobe.com/display/legalwiki/Open+Source+Guidelines+for+use+in+Adobe+Products+and+Services)
page.

- BOOST
- MIT
- BSD (2-Clause or 3-Clause)
- Apache 2.0
- Apple Public Source License 2.0
- Common Public License (CPL)
- Creative Commons Attribution v2.5/3.0 United States/Unported (CC BY)
- Creative Commons Attribution-No Derivative v3.0 United Stated (CC BY ND 3.0 US)
- Creative Commons Attribution v4.0 International (CC BY)
- Creative Commons Attribution-No Derivatives v4.0 International (CC BY-ND)
- Eclipse v1.0
- LGPL v2.1
- LGPL v3.0
- Mozilla Public License 1.1 (MPL)
- Netscape Public License 1.1 (NPL)
- Mozilla Public License 2.0 (MPL)
- CDDL v1.0, v1.1
- OSL-3.0 (Magento projects)
- ISC License (ISC)
- Unicode
- W3C Software and Document License (2023 version)

## Approved Code of Conduct

All Adobe open source projects must add our [CODE_OF_CONDUCT.md](https://github.com/adobe/starter-repo/blob/master/CODE_OF_CONDUCT.md)
(CoC) from [our starter-repo](https://github.com/adobe/starter-repo). The CoC has
been reviewed and approved by Adobe's Open Source Office and Legal. The CoC must
apply uniformly and consistently across all Adobe Open Source projects in order
not to give any projects preferential treatment.

[Magento has its own code of conduct](https://github.com/adobe/starter-repo/blob/master/CODE_OF_CONDUCT-Magento.md)
that Magento projects should use as well. It is roughly the same.

If you have any questions or feedback on the CoC, please feel free to [e-mail the
Open Source Office directly](mailto:Grp-opensourceoffice@adobe.com).

## Branding Policy

- Open Source Office recommends submitters follow our [Naming Guide](https://git.corp.adobe.com/OpenSourceAdvisoryBoard/handbook/blob/master/Naming.md).
- Open Source Office will keep reviewing and authorizing our small tier of projects
  ourselves (docs, code samples, small libraries). [Email Branding](mailto:naming@adobe.com)
  if we need clarification.
- Any product with commercial interest should [go through branding](mailto:naming@adobe.com).
- Open Source Office can use their own discretion. They can consider branding non-blocking
  and factor in their input after the fact for certain cases.

## Releasing Adobe Code to Individuals

Sometimes a project that was developed on Adobe hardware and/or time doesn't make
sense to open source under Adobe. Instead the main contributor wants to open source
it under their own account. In these cases, we can release the code to them if
the following conditions are satisfied:

- Employee gets their manager approval.
- No conflict of interest exists (deemed by OSO).
- Not maintained by Adobe (other than the person looking to open source this).
- Not used by Adobe.
- Approval from all current and past contributors to the project.
- Must use a commercial-friendly OS License (Apache, MIT, etc.).
- Discuss intent behind open sourcing. e.g. to start a startup with it, we may
  need more discussion or formal release.

# Post-Approval Steps

Once approval is granted, you likely need to follow up with a few steps.

1. For a Company contribution, we probably need to add a [github.com/adobe](https://github.com/adobe)
   repository and team. Please see the [GitHub Adobe Org Management documentation
   around creating a new project](https://developers.corp.adobe.com/opensource/handbook/GitHub-Adobe-Org-Management.md#creating-a-new-project-on-our-adobe-github-org)
   for details.
   - Ensure the project description, at a high enough level, is set on the project
     description field.
   - Worth checking if the project has some kind of continuous integration and/or
     deployment set up. If so, bring up the question of what services, if any,
     the team wants to migrate to.
   - For a contribution that includes publishing a package to the [Adobe org on **npm**](https://www.npmjs.com/settings/adobe/packages) we need to follow the instructions [here](https://developers.corp.adobe.com/opensource/handbook/releasing/npm.md#oso-instructions-adding-new-members)
   - To add new users to the Adobe org, have user [request access](https://developers.corp.adobe.com/opensource/handbook/GitHub-Adobe-Org-Management.md#request-access-to-our-adobe-github-org) through AMP
2. For a Community contribution, ensure the project exists in the [`os_lists` project's
   approvelist](https://git.corp.adobe.com/OpenSourceAdvisoryBoard/os_lists/blob/master/src/approvelist.json).
3. For a Personal contribution, make a note in the submission issue and close the ticket. No further tracking is needed.

# Post-Rejection Steps

If approval is not granted, there are a few things to remember to do.

1. Add the project to the [Open Source Office's `os_lists` project, specifically
   to the denylist](https://git.corp.adobe.com/OpenSourceAdvisoryBoard/os_lists/blob/master/src/denylist.json).
